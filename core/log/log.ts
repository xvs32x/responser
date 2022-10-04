import { injectable } from '@depender/core/injectable';

@injectable()
export class Log {

    showRequestLog(args: { route: string, controller: string, permission: boolean }): void {
        if (args.permission) {
            console.log('Request %s routed to %s', args.route, args.controller);
        }
    }

}