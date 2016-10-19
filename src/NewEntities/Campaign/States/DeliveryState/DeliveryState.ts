import {State} from '../../../Framework/State/State';
import {StateCollection} from '../../../Framework/State/StateCollection';

export abstract class DeliveryState extends State {

    public static getType() {
        return 'DELIVERY_STATE';
    }

    constructor(protected states: StateCollection) {
        super(states);
    }

    public abstract pause();

}
