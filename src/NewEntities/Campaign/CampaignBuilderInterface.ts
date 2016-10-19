import {IBuilder} from '../Framework/ViewsAndBuilders/BuilderInterface';

export interface ICampaignBuilder extends IBuilder {

    setName(name);
    addTargeting(targetings);
}
