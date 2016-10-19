import {Event} from '../../Framework/Events/Event';
import {Targeting} from '../../Targeting/Targeting.ts';

export class TargetingSetEvent extends Event {

    constructor(private targeting: Targeting) {
        super();
    }

    public getData() {
        return {
            targetings: this.targeting
        };
    }

    public deserialize(serializedEvent) {
        ;
    }

}
