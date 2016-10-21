import {AllocationRequest} from '../AllocationRequest';
import {Allocations} from '../Allocations';
import {Policy} from './Policy';
import {PolicyConfig} from './PolicyConfig';
import {NoRestrictionsPolicy} from './NoRestrictionsPolicy';

export class Policies {

    public static instantiate<T extends Policy>(PolicyType: { new (... any): T }, config: PolicyConfig) {
        return new PolicyType(config);
    }

    private policyChain = new NoRestrictionsPolicy({});

    constructor(policyConfigs: Array<PolicyConfig>) {
        policyConfigs.forEach((policyConfig) => {
            this.add(policyConfig.type, policyConfig.config);
        });
    }

    public isAcceptable(request: AllocationRequest, allocations: Allocations) {
        return this.policyChain.isAcceptable(request, allocations);
    }

    public add(type, config) {
        const current = this.policyChain;
        const newPolicy = Policies.instantiate(type, config);
        newPolicy.setNext(current);
        this.policyChain = newPolicy;
    }

}
