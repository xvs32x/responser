import { injectable } from '@depender/core/injectable';
import { ServerResponse } from 'http';

@injectable()
export class Response extends ServerResponse {}