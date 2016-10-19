import {AllocationRequest} from './AllocationRequest';
import {AuthorizationPolicy} from './Policies/AuthorizationPolicy';
import {expect} from 'chai';
import {Policies} from './Policies/Policies';
import {QuotaPolicy} from './Policies/QuotaPolicy';
import {Resource} from './Resource';

describe('Resource allocation', () => {
    const maxAmount = 100;
    let resource: Resource;

    beforeEach(createResource);

    function createResource() {
        resource = new Resource(maxAmount);
    }

    function request(num, type?: string) {
        return new AllocationRequest(num, type);
    }

    function assertCanAllocate(amount: number, type?: string) {
        expect(resource.allocate(request(amount, type))).to.be.true;
    }

    function assertCanNotAllocate(amount: number, type?: string) {
        expect(resource.allocate(request(amount, type))).to.be.false;
    }

    function getPolicyConfig() {
        return [
            {
                config: {
                    users: ['anonymous']
                },
                type: AuthorizationPolicy
            },
            {
                config: {
                    quota: 20,
                    requestType: 'Vacation'
                },
                type: QuotaPolicy
            },
            {
                config: {
                    quota: 45,
                    requestType: 'PersonalDays'
                },
                type: QuotaPolicy
            }
        ];
    }

    it('should successfully allocate empty allocation request', () => {
        assertCanAllocate(0);
        assertCanAllocate(0);
        assertCanAllocate(0);
        assertCanAllocate(0);
    });

    it('should allocate maximum to its capacity', () => {
        assertCanAllocate(maxAmount / 2);
        assertCanAllocate(maxAmount / 2);
        assertCanNotAllocate(1);
    });

    describe('policies', () => {

        describe('request type based quota policy', () => {

            const quota = 20;
            const requestType = 'Vacation';

            const policyConfig = getPolicyConfig();

            beforeEach(() => {
                const policy = new Policies(policyConfig);
                resource = new Resource(maxAmount, policy);
            });

            it('should only allow up to quota allocation, even if the capacity is otherwise higher', () => {
                assertCanAllocate(quota / 2, requestType);
                assertCanAllocate(quota / 2, requestType);
                assertCanNotAllocate(1, requestType);
            });

            it('should also consume from total', () => {
                resource.allocate(new AllocationRequest(quota, requestType));
                assertCanAllocate(maxAmount - quota);
                assertCanNotAllocate(1);
            });

            it('should maintain different kinds of quotas separately', () => {
                const requestType1 = 'Vacation';
                const requestType2 = 'PersonalDays';

                assertCanAllocate(30, requestType2);
                assertCanAllocate(10, requestType1);
                assertCanAllocate(15, requestType2);
                assertCanAllocate(10, requestType1);

                assertCanNotAllocate(1, requestType2);
                assertCanNotAllocate(1, requestType1);

                assertCanAllocate(35);
                assertCanNotAllocate(1);
            });

        });

    });

    describe('two resources', () => {
        it('should be independent', () => {
            const resource2 = new Resource(maxAmount);
            assertCanAllocate(maxAmount);
            expect(resource2.allocate(new AllocationRequest(maxAmount))).to.be.true;
        });
    });

});
