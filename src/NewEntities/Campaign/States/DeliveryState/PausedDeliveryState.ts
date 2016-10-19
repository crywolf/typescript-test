import {DeliveryState} from './DeliveryState';

export class PausedState extends DeliveryState {

    public pause() {
        throw new Error('Already in PAUSED state');
    }

    public getName() {
        return 'Paused';
    }

}
