import {State} from "./State";
import {Entity} from "../Entity/Entity";
import {EntityStateChangedEvent} from "../../Campaign/CampaignCollection/EntityStateChanged.event";
import {Event} from "../Events/Event";

export class StateCollection {

    private states: {[type:string] : State}  = {};

    constructor(private entity: Entity){};

    setState(StateType: typeof State) {
        let stateType = StateType.getType();
        let newState = new (<any>StateType)(this);         //TODO: figure out how to get rid of <any> here
        this.states[stateType] = newState;
        this.fireEvent(this.createEntityStateSetEvent(newState));
    }

    private fireEvent(event: Event) {
        this.entity.fireEvent(event);
    }

    private createEntityStateSetEvent(newState: State) {
        return new EntityStateChangedEvent(newState.getName());
    }

    public getStateType(type: typeof State) {
        return this.states[type.getType()];
    }


}
