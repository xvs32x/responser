import { Container } from '@depender/core/container';
import { Injection } from '@depender/core/injection';
import { Dependency } from '@depender/core/dependency';

export class Injector {

    static inject<T>(injection: Injection<T> | Dependency<T>): T {
        if (injection instanceof Function) {
            return Container.inject({ class: injection })
        }

        return Container.inject(injection);
    }

}