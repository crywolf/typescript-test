import {CampaignBuilder} from './CampaignBuilderInterface';
import {CampaignData} from './CampaignData';

export class CampaignInstanceBuilder implements CampaignBuilder {

    constructor(private campaignData: CampaignData) {
    }

    public setName(name) {
        this.campaignData.name = name;
    }

    public addTargeting(targeting) {
        this.campaignData.targetings.push(targeting);
    }

}
