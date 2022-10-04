import { injectable } from '@depender/core/injectable';
import { Response } from './core/response/response';
import { Request } from './core/request/request';

@injectable()
export class TestController {

    constructor(
        req: Request,
        res: Response
    ) {
        res.statusCode = 200;
        res.end('OK');
    }

}