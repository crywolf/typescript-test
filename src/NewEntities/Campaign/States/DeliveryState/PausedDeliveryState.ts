import {DeliveryState} from "./DeliveryState";

export class PausedState extends DeliveryState {

    pause() {
        throw new Error("Already in PAUSED state");
    }

    getName() {
        return "Paused";
    }

}
