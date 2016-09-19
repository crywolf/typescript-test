import {Event} from "../../Framework/Events/Event";

export interface NameSetEventData {
    newName: string
}

export class NameSetEvent extends Event {

    constructor(public newName:string) {
        super();
    }

    getData() : NameSetEventData {
        return {
            newName: this.newName
        }
    }

    deserialize(serializedEvent: NameSetEventData) {
        this.newName = serializedEvent.newName;
    }

}

Event.register(NameSetEvent);