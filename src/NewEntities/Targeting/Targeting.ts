export abstract class Targeting {

    static getTypeName() {
        return (<any>this).name;
    }

    getTypeName() {
        return (<any>this.constructor).name;
    }

    equals(targeting: Targeting) {
        return this.isSameType(targeting); // && this.hasSameValue(targeting)  - nutno doimplementovat
    }

    private isSameType(targeting: Targeting) {
        return this.constructor === targeting.constructor;
    }

    constructor(data:any){}

}
