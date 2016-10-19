import {NameSetEvent} from './SetName/NameSet.event';
import {ICampaignBuilder} from './CampaignBuilderInterface';
import {View} from '../Framework/ViewsAndBuilders/View';
import {TargetingSetEvent} from './SetTargeting/TargetingSet.event';

export class CampaignView extends View {

    constructor(protected builder: ICampaignBuilder) {
        super();
    }

    public applyNameSetEvent(event: NameSetEvent) {
        this.builder.setName(event.newName);
    }

    public applyTargetingSet(event: TargetingSetEvent) {
        this.builder.addTargeting(event.getData().targetings);
    }

}
