import {Campaign} from '../Campaign';

export class SetNameCommand {

    constructor(private name: string) {
    }

    public executeOn(entity: Campaign) {
        entity.setName(this.name);
    }

}
