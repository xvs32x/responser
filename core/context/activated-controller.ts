import { injectable } from '@depender/core/injectable';
import { Injector } from '../injector/injector';
import { ActivatedRoute } from './activated-route';

@injectable()
export class ActivatedController {

    constructor(activatedRoute: ActivatedRoute) {
        return Injector.inject({ class: activatedRoute.Controller, rewrite: true });
    }

}