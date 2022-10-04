import { injectable } from '@depender/core/injectable';

@injectable()
export class Config {
    isLogRequests: boolean;
}