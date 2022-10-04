export class Route {
    public method: string;
    public url: string;
    public Controller?: new () => {};

    constructor() {}

    serializeKey() {
        return `${this.method}-${this.url}`;
    }

    static GET({ url, Controller }: { url: string, Controller?: new (...args: any) => object }) {
        return Route.create({ method: 'GET', url, Controller });
    }

    static ALL({ url, Controller }: { url: string, Controller?: new (...args: any) => object }) {
        return Route.create({ method: '', url, Controller });
    }

    static create({ method, url, Controller }: { method: string, url: string, Controller?: new (...args: any) => {} }) {
        const route = new Route();
        route.method = method;
        route.url = url;
        route.Controller = Controller;
        return route;
    }

}