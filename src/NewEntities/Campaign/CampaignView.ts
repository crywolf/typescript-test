import {NameSetEvent} from "./SetName/NameSet.event";
import {CampaignBuilder} from "./CampaignBuilderInterface";
import {View} from "../Framework/ViewsAndBuilders/View";
import {TargetingSetEvent} from "./SetTargeting/TargetingSet.event";

export class CampaignView extends View {

    constructor(protected builder: CampaignBuilder){
        super();
    }

    applyNameSetEvent(event: NameSetEvent) {
        this.builder.setName(event.newName);
    }

    applyTargetingSet(event: TargetingSetEvent) {
        this.builder.addTargeting(event.getData().targetings);
    }

}
