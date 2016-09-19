import {CampaignFactory} from "./Campaign/CampaignFactory";
import {CommandProcessor} from "./Framework/Commands/CommandProcessor";
import {SetNameCommand} from "./Campaign/SetName/SetName.command";
import {SetTargetingCommand} from "./Campaign/SetTargeting/SetTargeting.command";
import {GeoTargeting} from "./Targeting/GeoTargeting/GeoTargeting";

import * as eventDictionary from "./Framework/Events/EventDictionary";
import {LoggingEventManager} from "./Framework/Events/Managers/LoggingEventManager";
import {BaseEventManager} from "./Framework/Events/Managers/BaseEventManager";
import {Environment} from "./Framework/Environment/Environment";
import {TransactionSavingEventManager} from "./Framework/Events/Managers/TransactionSavingEventManager";

console.log(eventDictionary);

let cf = new CampaignFactory();

cf.setEnvironment(new Environment(new LoggingEventManager(new TransactionSavingEventManager(new BaseEventManager()) )));

let camp1 = cf.instantiateFromEvents('1');


let camp2 = cf.createNew('2');
let camp3 = cf.createNew('3');

camp1.addSubCampaign(camp2);
camp1.addSubCampaign(camp3);

console.log(camp1);

let processor = new CommandProcessor();
let command = new SetNameCommand('pokus');

processor.process(command,camp1);

console.log(camp1);

let targeting = new GeoTargeting({});
let commandGeo = new SetTargetingCommand(targeting);

processor.process(commandGeo,camp1);

camp1.pause();
camp1.pause();