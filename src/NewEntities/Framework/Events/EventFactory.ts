import {Event} from "./Event";
import * as eventDictionary from "./EventDictionary";


export class EventFactory {

    instantiate<E extends Event> ( EventType:{new():E} ): E {
        return new EventType();
    }

    deserialize(serializedEvent) {
        let constructorName = serializedEvent.typeName;
        let event:Event = new eventDictionary[constructorName]();
        event.deserialize(serializedEvent.data);

        return event;
    }

}
