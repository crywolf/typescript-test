import {Event} from '../../Framework/Events/Event';

export interface INameSetEventData {
    newName: string;
}

export class NameSetEvent extends Event {

    constructor(public newName: string) {
        super();
    }

    public getData(): INameSetEventData {
        return {
            newName: this.newName
        };
    }

    public deserialize(serializedEvent: INameSetEventData) {
        this.newName = serializedEvent.newName;
    }

}

Event.register(NameSetEvent);
