import {DeliveryState} from './DeliveryState';
import {PausedState} from './PausedDeliveryState';

export class DeliveringState extends DeliveryState {

    public pause() {
        this.states.setState(PausedState);
    }

    public getName() {
        return 'Delivering';
    }

}
