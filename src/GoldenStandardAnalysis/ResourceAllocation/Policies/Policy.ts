import {AllocationRequest} from '../AllocationRequest';
import {Allocations} from '../Allocations';
export abstract class Policy {

    private nextPolicy;

    constructor(protected config: any) {
    }

    public setNext<T extends Policy>(policy: T) {
        this.nextPolicy = policy;
    }

    public isAcceptable(request: AllocationRequest, allocations: Allocations): boolean {
        if (this.handle(request, allocations)) {
            return this.callNext(request, allocations);
        }
        return false;
    }

    public abstract handle(request, allocations): boolean;

    protected callNext(request, allocations) {
        if (this.nextPolicy) {
            return this.nextPolicy.isAcceptable(request, allocations);
        } else {
            return true;
        }
    }

}
