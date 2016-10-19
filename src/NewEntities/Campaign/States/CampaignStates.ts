import {StateCollection} from '../../Framework/State/StateCollection';
import {Campaign} from '../Campaign';
import {DeliveryState} from './DeliveryState/DeliveryState';
import {NonDeliveringState} from './DeliveryState/NonDeliveringDeliveryState';

export class CampaignStates extends StateCollection {

    constructor(campaign: Campaign) {
        super(campaign);
        this.setState(NonDeliveringState);
    }

    public pause() {
        let state = <DeliveryState> this.getStateType(DeliveryState);
        state.pause();
    }

}
