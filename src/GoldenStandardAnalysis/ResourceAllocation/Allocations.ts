import {AllocationRequest} from './AllocationRequest';

export class Allocations {

    private total = 0;
    private totalsByType = {};

    public getTotal() {
        return this.total;
    }

    public getTotalFor(type) {
        return this.totalsByType[type] || 0;
    }

    public add(request: AllocationRequest) {
        const type = request.getType();
        const amount = request.getAmount();

        this.total += amount;
        this.totalsByType[type] = this.getTotalFor(type) + amount;
    }
}
