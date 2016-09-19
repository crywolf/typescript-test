import {Command} from "./Command";
import {Entity} from "../Entity/Entity";

export class CommandProcessor {

    process(command: Command, entity: Entity) {
        command.executeOn(entity);
    }

}
