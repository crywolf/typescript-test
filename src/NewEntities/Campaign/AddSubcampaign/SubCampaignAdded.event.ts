import {Event} from '../../Framework/Events/Event';
import {Campaign} from '../Campaign';

export class SubCampaignAddedEvent extends Event {

    constructor(private campaign: Campaign) {
        super();
    }

    public getData() {
        return {
            campaignAdded: this.campaign
        };
    }

    public deserialize(serializedEvent) {
        //
    }

}
