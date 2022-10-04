import { injectable } from '@depender/core/injectable';
import { Response } from './core/response/response';

@injectable()
export class Controller404 {

    constructor(res: Response) {
        res.statusCode = 404;
        res.end('Not Found');
    }

}