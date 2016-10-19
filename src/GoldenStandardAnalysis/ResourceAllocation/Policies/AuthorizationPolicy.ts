import {Policy} from './Policy';
import {AllocationRequest} from '../AllocationRequest';
import {Allocations} from '../Allocations';
/*
 Allows requests based on WHO is making them
 */

interface IAuthorizationConfig {
    users: Array<string>;
}

export class AuthorizationPolicy extends Policy {

    constructor(config) {
        super(config);
        this.config = <IAuthorizationConfig> config;
    }

    public handle(request: AllocationRequest, allocations: Allocations) {
        return this.config.users.indexOf(request.getRequestor()) !== -1;
    }
}
