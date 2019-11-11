import { Request, Response, NextFunction } from 'express';
import { Server } from 'net';
import { ServiceRouter } from './services/serviceRouter';

import * as express  from 'express';
import * as path from 'path';
import * as fs from 'fs';
// import express = require('express');
// import path = require('path');
// import fs = require('fs');


export class Startup {
  static servers: Server[] = [];
  public static run(): void {

    var app = express.default();

    let rootPath = path.join(__dirname, '..', '..', 'dist');
    if (!fs.existsSync(path.join(rootPath, 'index.html'))) {
      rootPath = path.join(__dirname, '..', '..', 'public');
    }

    app.use(express.static(rootPath));
    app.use(express.json())
    // Add headers
    app.use(function (req: Request, res: Response, next: NextFunction) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, ');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,access-control-allow-origin');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      // Use json as content-type
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      // res.contentType('text/html; charset=utf-8');
      // Pass to next layer of middleware
      next();
    });

    new ServiceRouter().attach(app);

    // listening
    let port = 9000;
    let server: Server = app.listen(port);

    // log status
    this.servers.push(server);
    server.on('listening', () => {
      console.log('listening: ' + port)
    })
      .on('error', (error: any) => {
        console.log('error: ' + JSON.stringify(error))
      });

  }

  public static shutdown() {
    this.servers.forEach(server => {
      server.close(function() {
        console.log('shutdown...');
      });
      setImmediate(function(){server.emit('close')});
      process.exit(0);
    });
  }
}

Startup.run();