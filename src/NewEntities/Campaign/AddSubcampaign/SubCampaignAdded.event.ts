import {Event} from "../../Framework/Events/Event";
import {Campaign} from "../Campaign";

export class SubCampaignAddedEvent extends Event {

    constructor(private campaign: Campaign) {
        super();
    }

    getData() {
        return {
            campaignAdded: this.campaign
        }
    }

    deserialize(serializedEvent) {

    }

}
