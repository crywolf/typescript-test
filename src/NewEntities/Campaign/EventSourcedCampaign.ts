import {Campaign} from './Campaign';
import {CampaignData} from './CampaignData';
import {NameSetEvent} from './SetName/NameSet.event';
import {EventSourcedTargetingCollection} from '../Targeting/TargetingCollection/EventSourcedTargetingCollection';

export class EventSourcedCampaign extends Campaign {

    constructor(id, data: CampaignData) {
        super(id);
        this.initialize(data);
    }

    public setName(newName) {
        const oldName = this.name;
        super.setName(newName);
        if (oldName !== newName) {
            this.fireEvent(new NameSetEvent(newName));
        }
    }

    private initialize(data) {
        this.applyName(data.name);
        this.applyTargeting(data.targetings);
    }

    private applyName(name) {
        this.name = name;
    }

    private applyTargeting(targetings) {
        this.targetings = new EventSourcedTargetingCollection(this, targetings);
    }

}
