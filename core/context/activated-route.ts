import { injectable } from '@depender/core/injectable';
import { Router } from '../router/router';
import { Request } from '../request/request';
import { Route } from '../router/route';
import { Log } from '../log/log';
import { Config } from '../config/config';

@injectable()
export class ActivatedRoute extends Route {

    constructor(log: Log, config: Config, request: Request, router: Router) {
        super();
        const route = router.match(Route.create({ method: request.method, url: request.url }));
        log.showRequestLog({ route: route.url, controller: route.Controller.name, permission: config.isLogRequests });
        return route;
    }

}