import {Command} from './Command';
import {Entity} from '../Entity/Entity';

export class CommandProcessor {

    public process(command: Command, entity: Entity) {
        command.executeOn(entity);
    }

}
