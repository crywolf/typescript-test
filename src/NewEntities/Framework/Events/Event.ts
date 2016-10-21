import {Entity} from '../Entity/Entity';
import * as eventDictionary from './EventDictionary';

export abstract class Event {

    public static getTypeName() {
        return (<any> this).name;
    }

    public static register(econ) {
        eventDictionary[econ.name] = econ;
    }

    private source: Entity;

    public getData() {
        return <any> {};
    }

    public getTypeName() {
        return (<any> this).constructor.name;
    }

    public serialize() {
        return {
            data: this.getData(),
            typeName: this.getTypeName()
        };
    }

    public setSource(entity: Entity) {
        this.source = entity;
    }

    public getSource() {
        return this.source;
    }

    public abstract deserialize(serializedEvent);

}
