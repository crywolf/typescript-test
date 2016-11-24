import {CampaignCollection} from './CampaignCollection/CampaignCollection';
import {Entity} from '../Framework/Entity/Entity';
import {TargetingCollection} from '../Targeting/TargetingCollection/TargetingCollection';
import {Targeting} from '../Targeting/Targeting';
import {CampaignStates} from './States/CampaignStates';
import {State} from '../Framework/State/State';

export class Campaign extends Entity {

    protected name = '';
    protected targetings: TargetingCollection;
    protected subcampaigns: CampaignCollection;
    protected states: CampaignStates;

    constructor(id) {
        super(id);
        this.targetings = new TargetingCollection(this);
        this.subcampaigns = new CampaignCollection(this);
        this.states = new CampaignStates(this);
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string) {
        this.name = newName;
    }

    public setTargeting(targeting: Targeting) {
        this.targetings.add(targeting);
        this.subcampaigns.each((subcampaign) => subcampaign.setTargeting(targeting));
    }

    public getTargetingByType(targetingType: typeof Targeting) {
        return this.targetings.getByType(targetingType);
    }

    public addSubCampaign(campaign: Campaign) {
        this.subcampaigns.add(campaign);
    }

    public pause() {
        this.states.pause();
    }

    public getState(stateType: typeof State) {
        return this.states.getStateType(stateType);
    }

}
