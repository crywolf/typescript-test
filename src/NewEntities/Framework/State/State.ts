import {StateCollection} from './StateCollection';

export abstract class State {

    public static getType(): string {
        return 'ABSTRACt_STATE - you should not see this';
    } // TODO: can this be enforced and inherited?

    constructor(protected states: StateCollection) {

    }

    public abstract getName(): string;  // TODO: can this be somehow STATIC?

}
