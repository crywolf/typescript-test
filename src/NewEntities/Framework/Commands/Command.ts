import {Entity} from '../Entity/Entity';

export abstract class Command {

    public abstract executeOn(entity: Entity);

}
