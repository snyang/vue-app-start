import { Application, Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { ServiceInterface } from './serviceInterface';

export class RootService implements ServiceInterface {

	attach(application: Application) {
		// GET '/'
		application.get('/', this.loadDefaultPage);

		// // OPTIONS *
		// application.options('*', (request: Request, response: Response) => {
		//   response.json({
		//     status: 'OK'
		//   });
		// });
	}

	loadDefaultPage(request: Request, response: Response) {
		let rootPath = path.join(__dirname, '..', '..', '..', 'client', 'dist');
		if (!fs.existsSync(path.join(rootPath, 'index.html'))) {
			rootPath = path.join(__dirname, '..', '..', '..', 'client', 'public');
		}
		let defaultPage = 'index.html';

		response.setHeader('Content-Type', 'text/html; charset=utf-8');
		response.contentType('text/html; charset=utf-8');
		var options = {
			root: rootPath,
			headers: {
				'Content-Type': 'text/html; charset=utf-8',
			}
		}
		response.sendFile(defaultPage, options);
	}

}