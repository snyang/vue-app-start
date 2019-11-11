import { Application } from 'express';
import { ServiceInterface } from './serviceInterface';
import { RootService } from './rootService';
import { CoreService } from './coreService';
import { ClientRouterService } from './clientRouterService';

export class ServiceRouter implements ServiceInterface {

	attach(application: Application) {
		new RootService().attach(application);
		new CoreService().attach(application);
		new ClientRouterService().attach(application);
	}
}