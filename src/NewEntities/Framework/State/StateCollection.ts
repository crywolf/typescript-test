import {State} from './State';
import {Entity} from '../Entity/Entity';
import {Event} from '../Events/Event';
import {EntityStateChangedEvent} from '../Entity/EntityStateChanged.event';

export class StateCollection {

    private states: {[type: string]: State} = {};

    constructor(private entity: Entity) {
    }

    public setState(stateConstructor: typeof State) {
        let stateType = stateConstructor.getType();
        let newState = new (<any> stateConstructor)(this);         // TODO: figure out how to get rid of <any> here
        this.states[stateType] = newState;
        this.fireEvent(this.createEntityStateSetEvent(newState));
    }

    public getStateType(type: typeof State) {
        return this.states[type.getType()];
    }

    private fireEvent(event: Event) {
        this.entity.fireEvent(event);
    }

    private createEntityStateSetEvent(newState: State) {
        return new EntityStateChangedEvent(newState.getName());
    }

}
