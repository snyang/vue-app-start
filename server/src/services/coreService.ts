import { Application, Request, Response } from 'express';
import { ServiceInterface } from './serviceInterface';
import { Startup } from '../startServer';

export class CoreService implements ServiceInterface {

	attach(application: Application) {
		// DELETE shutdown
		application.delete('/api/core/shutdown', this.shutdown)

		// GET echo
		application.get('/api/core/echo', this.echo);

	}

	echo(request: Request, response: Response) {
		response.json({ message: 'Hello~~~' });
	}

	shutdown(request: Request, response: Response) {
		response.json({ message: 'shutdown...' });
		Startup.shutdown();
	}
}