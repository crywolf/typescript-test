import {Targeting} from '../Targeting';
import {ValueObjectCollection} from '../../Framework/ValueObjects/ValueObjectCollection';

/*
 Collection itself is not a value object, it is merely a construct that helps manipulating the value objects
 It fires the events on behalf of the owning entity
 */

export class TargetingCollection extends ValueObjectCollection {

    protected targetingMap: { [type: string]: Targeting} = {};

    public add(targeting: Targeting) {
        this.addToMap(targeting);
    }

    public getByType(targetingType: typeof Targeting) {
        return this.targetingMap[targetingType.getTypeName()];
    }

    protected addToMap(targeting: Targeting) {
        this.targetingMap[targeting.getTypeName()] = targeting;
    }
}
