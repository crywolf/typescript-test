import {NameSetEvent} from "./SetName/NameSet.event";
import {Campaign} from "./Campaign";
import {EventFactory} from "../Framework/Events/EventFactory";
import {CampaignView} from "./CampaignView";
import {CampaignInstanceBuilder, CampaignData} from "./CampaignInstanceBuilder";
import {TransactionSavingEventManager} from "../Framework/Events/Managers/TransactionSavingEventManager";
import {BaseEventManager} from "../Framework/Events/Managers/BaseEventManager";
import {Environment} from "../Framework/Environment/Environment";
import {EventSourcedCampaign} from "./EventSourcedCampaign";


let events = [
    new NameSetEvent('firstName').serialize(),
    new NameSetEvent('secondName').serialize()
];

export class CampaignFactory {

    private eventFactory = new EventFactory();
    private ViewClass =  CampaignView;
    private BuilderClass = CampaignInstanceBuilder;

    private environment = new Environment(new TransactionSavingEventManager(new BaseEventManager()) );

    setEnvironment(env: Environment) {
        this.environment = env;
    }


    createNew(id:string) : Campaign {
        let campaign = new Campaign(id);
        return this.initialize(campaign);
    }

    instantiateFromEvents(id): Campaign {
        let campaignSnapshot = this.buildCampaignSnapshotDataFromEvents();
        let campaign =  new EventSourcedCampaign(id, campaignSnapshot);
        return this.initialize(campaign);
    }

    private initialize(campaign: Campaign) {
        campaign.setEnvironment(this.environment);
        return campaign;
    }

    private buildCampaignSnapshotDataFromEvents() {
        let data = new CampaignData();
        let view  = new this.ViewClass(new this.BuilderClass(data));

        events.forEach( serializedEvent => { this.applyEvent(view, serializedEvent) });

        return data;
    }

    private applyEvent(view, serializedEvent) {
        let event = this.eventFactory.deserialize(serializedEvent);
        view.apply(event);
    }
}
