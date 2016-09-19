import {AllocationRequest} from "../AllocationRequest";
import {Allocations} from "../Allocations";
import {Policy} from "./Policy";
import {PolicyConfig} from "./PolicyConfig";
import {NoRestrictionsPolicy} from "./NoRestrictionsPolicy";

export class Policies {

    private policyChain = new NoRestrictionsPolicy({});

    isAcceptable(request: AllocationRequest, allocations: Allocations) {
        return this.policyChain.isAcceptable(request, allocations);
    }

    add(type, config) {
        const current = this.policyChain;
        const newPolicy =  Policies.instantiate(type, config);
        newPolicy.setNext(current);
        this.policyChain = newPolicy;
    }

    constructor(policyConfigs: Array<PolicyConfig>) {
        policyConfigs.forEach((policyConfig)=>{
            this.add(policyConfig.type, policyConfig.config);
        });
    }

    static instantiate<T extends Policy>( PolicyType: { new (... any):T }, config: PolicyConfig ) {
        return new PolicyType(config);
    }

}
