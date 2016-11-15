import {Event} from './Event';
import * as eventDictionary from './EventDictionary';

export class EventFactory {

    public static instantiate<E extends Event>(eventConstructor: {new(): E}): E {
        return new eventConstructor();
    }

    public static deserialize(serializedEvent) {
        let constructorName = serializedEvent.typeName;
        let event: Event = new eventDictionary[constructorName]();
        event.deserialize(serializedEvent.data);

        return event;
    }

}
