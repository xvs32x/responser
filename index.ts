import { Application } from './core/application';
import { TestController } from './test.controller';
import { Route } from './core/router/route';
import { Controller404 } from './controller-404';

const application = new Application([
    Route.GET({ url: '/', Controller: TestController }),
    Route.ALL({ url: '*', Controller: Controller404 }),
], { isLogRequests: true });

application.run(3000, '127.0.0.1');