import {Event} from "../Events/Event";

export abstract class View {

    apply(event: Event) {
        let type = event.getTypeName();
        let eventHandlerName = 'apply'+type;
        if (this.hasOwnProperty(eventHandlerName)) {
            this[eventHandlerName](event);
        }
    }

}
