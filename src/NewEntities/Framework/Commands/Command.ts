import {Entity} from "../Entity/Entity";

export abstract class Command {

    abstract executeOn (entity:Entity);

}
