import {expect} from 'chai';
import {Campaign} from './Campaign';
import {DeliveryState} from './States/DeliveryState/DeliveryState';
import {NonDeliveringState} from './States/DeliveryState/NonDeliveringDeliveryState';
import {State} from '../Framework/State/State';
import {PausedState} from './States/DeliveryState/PausedDeliveryState';
import {GeoTargeting} from '../Targeting/GeoTargeting/GeoTargeting';

describe('Campaign', () => {

    let campaign: Campaign;
    let subCampaign1: Campaign;
    let subCampaign2: Campaign;

    function createCampaign(id) {
        return new Campaign(id);
    }

    function addSubCampaignsToCampaign() {
        subCampaign1 = createCampaign('subId1');
        subCampaign2 = createCampaign('subId2');

        campaign.addSubCampaign(subCampaign1);
        campaign.addSubCampaign(subCampaign2);
    }

    beforeEach(() => {
        campaign = createCampaign('someId');
    });

    describe('setting name', () => {

        it('should not allow setting anything but string', () => {
            function setNameTo(value: any) {
                return () => {
                    campaign.setName(value);
                };
            }

            expect(setNameTo(null)).to.throw;
            expect(setNameTo(undefined)).to.throw;
        });

        it('should initially have no name', () => {
            expect(campaign.getName()).to.eq('');
        });

        it('should set name to name provided', () => {
            campaign.setName('abc');
            expect(campaign.getName()).to.eq('abc');

            campaign.setName('1234 678 SOmeCraZ1 St*ing');
            expect(campaign.getName()).to.eq('1234 678 SOmeCraZ1 St*ing');
        });

    });

    describe('states', () => {

        function assertCampaignInState(stateType: typeof State, stateValue: typeof State) {
            return expect(campaign.getState(stateType)).to.be.instanceOf(stateValue);
        }

        it('should initially be in non delivering state', () => {
            assertCampaignInState(DeliveryState, NonDeliveringState);
        });

        it('should switch to PAUSED when pause is called', () => {
            campaign.pause();
            assertCampaignInState(DeliveryState, PausedState);
        });

        it('should throw if pause is attempted on paused campaign', () => {
            campaign.pause();
            expect(campaign.pause).to.throw;
        });
    });

    describe('adding subcampaigns', () => {

        it('should allow adding subcampaigns', () => {
            addSubCampaignsToCampaign();
            // should throw if it does not exist.. should this test even exist?
        });

    });

    describe('setting targeting', () => {

        it('should allow setting targeting', () => {
            let targeting = new GeoTargeting({});
            campaign.setTargeting(targeting);
        });

        it('should propagate the targeting to subcampaigns', () => {
            function assertCampaignHasTargeting(camp, targ) {
                expect(camp.getTargetingByType(GeoTargeting)).to.eq(targ);
            }

            addSubCampaignsToCampaign();
            let targeting = new GeoTargeting({});
            campaign.setTargeting(targeting);

            assertCampaignHasTargeting(campaign, targeting);
            assertCampaignHasTargeting(subCampaign1, targeting);
            assertCampaignHasTargeting(subCampaign2, targeting);
        });
    });

});
