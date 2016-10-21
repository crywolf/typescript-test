import {Policy} from './Policy';
import {AllocationRequest} from '../AllocationRequest';
import {Allocations} from '../Allocations';
/*
 Approves requests based on the request amount and total quota for it
 */

interface QuotaConfig {
    requestType: string;
    quota: number;
}

export class QuotaPolicy extends Policy {

    constructor(config) {
        super(config);
        this.config = <QuotaConfig> config;
    }

    public handle(request: AllocationRequest, allocations: Allocations) {
        if (this.isMyRequestType(request) && this.amountExceedesQuota(request, allocations)) {
            return false;
        }
        return true;
    }

    private isMyRequestType(request: AllocationRequest) {
        return request.getType() === this.config.requestType;
    }

    private amountExceedesQuota(request, allocations) {
        return allocations.getTotalFor(request.getType()) + request.getAmount() > this.config.quota;
    }
}
