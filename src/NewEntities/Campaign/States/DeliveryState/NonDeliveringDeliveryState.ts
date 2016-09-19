import {DeliveryState} from "./DeliveryState";
import {PausedState} from "./PausedDeliveryState";

export class NonDeliveringState extends DeliveryState {

    pause() {
        this.states.setState(PausedState);
    }

    getName() {
        return "NonDelivering";
    }

}
