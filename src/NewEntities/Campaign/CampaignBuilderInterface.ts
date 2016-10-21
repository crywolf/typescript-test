import {Builder} from '../Framework/ViewsAndBuilders/BuilderInterface';

export interface CampaignBuilder extends Builder {

    setName(name);
    addTargeting(targetings);
}
