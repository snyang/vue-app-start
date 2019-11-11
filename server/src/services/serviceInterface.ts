import { Application } from 'express';

export interface ServiceInterface {
	attach(application: Application): void
}
