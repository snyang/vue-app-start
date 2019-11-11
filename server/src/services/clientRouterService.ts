import { Application, Request, Response } from 'express';
import { ServiceInterface } from './serviceInterface';

export class ClientRouterService implements ServiceInterface {

	attach(application: Application) {
		// Implement client router
		application.get('/page/*', this.clientRouter);

	}

	clientRouter(request: Request, response: Response) {
		response.redirect(request.url);
	}

}