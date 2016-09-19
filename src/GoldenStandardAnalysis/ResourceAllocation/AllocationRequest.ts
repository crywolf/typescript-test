export  class AllocationRequest {

    constructor(private amount: number, private type?: string, private requestor?: string) {
        if (!requestor) {
            this.requestor = "anonymous";
        }
    };


    getAmount() {
        return this.amount;
    }

    getType() {
        return this.type;
    }

    getRequestor() {
        return this.requestor;
    }
}