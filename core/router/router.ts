import { injectable } from '@depender/core/injectable';
import { Route } from './route';
import 'reflect-metadata'

@injectable()
export class Router {
    mapping: {[buildKey: string]: Route}

    constructor(readonly routes: Route[]) {
        this.mapping = routes.reduce((acc, route) => ({...acc, [route.serializeKey()]: route}), {});
    }

    match(route: Route): Route {
        const key = route.serializeKey();
        return this.mapping[key] ? this.mapping[key] : this.mapping['*'];
    }
}