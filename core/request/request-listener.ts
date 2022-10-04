import { injectable } from '@depender/core/injectable';
import { Injector } from '../injector/injector';
import { Request } from './request';
import { Response } from '../response/response';
import { ActivatedRoute } from '../context/activated-route';
import { ActivatedController } from '../context/activated-controller';

@injectable()
export class RequestListener {

    constructor(
        private request: Request,
        private response: Response,
    ) {
        Injector.inject({ class: Request, rewrite: true, instance: request });
        Injector.inject({ class: Response, rewrite: true, instance: response });
        Injector.inject({ class: ActivatedRoute, rewrite: true });
        Injector.inject({ class: ActivatedController, rewrite: true });
    }

}