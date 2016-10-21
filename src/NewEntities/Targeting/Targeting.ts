export abstract class Targeting {

    public static getTypeName() {
        return (<any> this).name;
    }

    constructor(data: any) {
        //
    }

    public getTypeName() {
        return (<any> this.constructor).name;
    }

    public equals(targeting: Targeting) {
        return this.isSameType(targeting); // && this.hasSameValue(targeting)  - nutno doimplementovat
    }

    private isSameType(targeting: Targeting) {
        return this.constructor === targeting.constructor;
    }

}
