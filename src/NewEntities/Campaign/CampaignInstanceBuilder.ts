import {CampaignBuilder} from './CampaignBuilderInterface';
import {Targeting} from '../Targeting/Targeting.ts';

export class CampaignData {
    public name: string = '';
    public targetings: Array<Targeting> = [];
}

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
