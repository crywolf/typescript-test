import {expect} from 'chai';
import {Campaign} from './Campaign';
import {Environment} from '../Framework/Environment/Environment';
import {TransactionSavingEventManager} from '../Framework/Events/Managers/TransactionSavingEventManager';
import {BaseEventManager} from '../Framework/Events/Managers/BaseEventManager';
import {CampaignData} from './CampaignData';
import {GeoTargeting} from '../Targeting/GeoTargeting/GeoTargeting';
import {EventSourcedCampaign} from './EventSourcedCampaign';
import {NameSetEvent} from './SetName/NameSet.event';

describe('Campaign', () => {

    let campaign: Campaign;
    let subCampaign1: Campaign;
    let subCampaign2: Campaign;
    let environment: Environment = new Environment(new TransactionSavingEventManager(new BaseEventManager()));

    let campaignData: CampaignData = {
        name: 'dataName',
        targetings: [new GeoTargeting({})]
    };

    function createCampaign(id, data) {
        let newCampaign = new EventSourcedCampaign(id, data);
        newCampaign.setEnvironment(environment);
        return newCampaign;
    }

    function addSubCampaignsToCampaign() {
        subCampaign1 = createCampaign('subId1', campaignData);
        subCampaign2 = createCampaign('subId2', campaignData);

        campaign.addSubCampaign(subCampaign1);
        campaign.addSubCampaign(subCampaign2);
    }

    function assertEventCount(n) {
        expect(environment.getEventsProduced()).to.have.length(n);
    }

    function assertLastEventType(eventType) {
        let event = environment.getLastEvent();
        expect(event.getTypeName()).to.eq(eventType.getTypeName());
    }

    beforeEach(() => {
        campaign = createCampaign('someId', campaignData);
        environment.reset();
    });

    describe('Initialization with campaign data', () => {

        it('should have a name', () => {
            expect(campaign.getName()).to.eq(campaignData.name);
        });

        it('should have correct targeting set', () => {
            expect(campaign.getTargetingByType(GeoTargeting).equals(new GeoTargeting({}))).to.be.true;
        });

    });

    describe('Setting name', () => {

        beforeEach(() => assertEventCount(0));

        it('should produce NameSet event if name set is different than the existing one', () => {
            campaign.setName(campaignData.name);
            assertEventCount(0);
            campaign.setName('differentName');
            assertEventCount(1);
            assertLastEventType(NameSetEvent);
            campaign.setName('differentName');
            assertEventCount(1);
            campaign.setName('yet differentName');
            assertEventCount(2);
        });

        it('should produce event with new name set in it', () => {
            campaign.setName('differentName');
            let event = environment.getLastEvent();
            expect(event.getData().newName).to.eq('differentName');
        });
    });

    describe('Setting targeting', () => {

        it('should produce event for campaign and each subcampaign', () => {
            addSubCampaignsToCampaign();
            environment.reset();
            campaign.setTargeting(new GeoTargeting({}));
            assertEventCount(3);
        });

    });

});
