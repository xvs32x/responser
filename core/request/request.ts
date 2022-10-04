import { injectable } from '@depender/core/injectable';
import { IncomingMessage } from 'http';

@injectable()
export class Request extends IncomingMessage {}