import {Entity} from "../Entity/Entity";
import * as eventDictionary from "./EventDictionary";

export abstract class Event {

    private source: Entity;

    getData() {
        return <any>{};
    };

    getTypeName() {
        return (<any>this).constructor.name;
    };

    static getTypeName() {
        return (<any>this).name;
    }

    serialize() {
        return {
            data: this.getData(),
            typeName: this.getTypeName()
        }
    }

    setSource(entity:Entity) {
        this.source = entity;
    }

    getSource() {
        return this.source;
    }

    public abstract deserialize(serializedEvent);

    static register(econ) {
        eventDictionary[econ.name] = econ;
    }


}
