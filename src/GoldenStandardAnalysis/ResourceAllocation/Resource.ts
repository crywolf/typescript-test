import {AllocationRequest} from './AllocationRequest';
import {Policies} from './Policies/Policies';
import {Allocations} from './Allocations';

export class Resource {

    private allocations;

    constructor(private total: number, private policy?: Policies) {
        if (!policy) {
            this.policy = new Policies([]);
        }
        this.allocations = new Allocations();
    }

    public allocate(request: AllocationRequest) {
        if (this.canAllocate(request) && this.policiesAllow(request)) {
            this.allocations.add(request);
            return true;
        }
        return false;
    }

    private policiesAllow(request: AllocationRequest) {
        return this.policy.isAcceptable(request, this.allocations);
    }

    private canAllocate(request) {
        const remaining = this.total - this.allocations.getTotal();
        return remaining >= request.getAmount();
    }
}
