import {State} from "../../../Framework/State/State";
import {StateCollection} from "../../../Framework/State/StateCollection";

export abstract class DeliveryState extends State {

    constructor(protected states:StateCollection) {
        super(states);
    }

    static getType() {
        return "DELIVERY_STATE";
    }

    abstract pause();


}
