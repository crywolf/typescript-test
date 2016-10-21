export class AllocationRequest {

    constructor(private amount: number, private type?: string, private requestor?: string) {
        if (!requestor) {
            this.requestor = 'anonymous';
        }
    }

    public getAmount() {
        return this.amount;
    }

    public getType() {
        return this.type;
    }

    public getRequestor() {
        return this.requestor;
    }
}
