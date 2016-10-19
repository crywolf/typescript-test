import {DeliveryState} from './DeliveryState';
import {PausedState} from './PausedDeliveryState';

export class NonDeliveringState extends DeliveryState {

    public pause() {
        this.states.setState(PausedState);
    }

    public getName() {
        return 'NonDelivering';
    }

}
