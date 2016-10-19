import {Campaign} from '../Campaign';
import {SubCampaignAddedEvent} from '../AddSubcampaign/SubCampaignAdded.event';
import {ValueObjectCollection} from '../../Framework/ValueObjects/ValueObjectCollection';

export class CampaignCollection extends ValueObjectCollection {

    private campaigns: Array<Campaign> = [];

    public add(campaign: Campaign) {
        this.campaigns.push(campaign);
        this.fireEvent(new SubCampaignAddedEvent(campaign));
    }

    public each(fn) {
        this.campaigns.forEach(fn);
    }

}
