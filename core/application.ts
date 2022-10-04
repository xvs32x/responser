import { Router } from './router/router';
import * as http from 'http';
import { RequestListener } from './request/request-listener';
import { Server, ServerResponse } from 'http';
import { Injector } from './injector/injector';
import { Route } from './router/route';
import { Request } from './request/request';
import { Response } from './response/response';
import { Config } from './config/config';

export class Application {
    server: Server;

    constructor(public routes: Route[], config: Partial<Config> = {}) {
        Injector.inject({ class: Config, instance: config });
        Injector.inject({ class: Router, overrides: [ this.routes ] });
        this.server = http.createServer({
            IncomingMessage: Request,
            ServerResponse: Response as typeof ServerResponse,
        }, (req, res) => {
            return Injector.inject({ class: RequestListener, rewrite: true, overrides: [ req, res ] });
        });
    }

    run(port: number, host: string): void {
        this.server.listen(port, host, () => {
            console.log(`Server listens http://${host}:${port}`);
        });
    }
}