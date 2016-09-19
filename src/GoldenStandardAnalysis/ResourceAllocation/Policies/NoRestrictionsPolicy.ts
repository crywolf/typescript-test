import {Policy} from "./Policy";
export class NoRestrictionsPolicy extends Policy {

    handle(request, allocations): boolean {
        return true;
    }

}
