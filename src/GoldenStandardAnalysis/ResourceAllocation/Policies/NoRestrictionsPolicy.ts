import {Policy} from './Policy';
export class NoRestrictionsPolicy extends Policy {

    public handle(request, allocations): boolean {
        return true;
    }

}
