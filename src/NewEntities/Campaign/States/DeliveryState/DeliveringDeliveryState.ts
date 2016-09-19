import {DeliveryState} from "./DeliveryState";
import {PausedState} from "./PausedDeliveryState";

export class DeliveringState extends DeliveryState {

    pause() {
        this.states.setState(PausedState);
    }

    getName() {
        return "Delivering";
    }

}
