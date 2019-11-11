import { Application } from 'express';
import { ServiceInterface } from './serviceInterface';
import { RootService } from './rootService';


export class ServiceRouter implements ServiceInterface {

  attach(application: Application) {
    new RootService().attach(application);
  }
}