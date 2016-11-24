import {Campaign} from '../Campaign';
import {Targeting} from '../../Targeting/Targeting';
import {GeoTargeting} from '../../Targeting/GeoTargeting/GeoTargeting';

export class SetTargetingCommand {

    private targeting: Targeting;

    constructor( data: any) {
        this.targeting = new GeoTargeting(data);
    }

    public executeOn(entity: Campaign) {
        entity.setTargeting(this.targeting);
    }

}
