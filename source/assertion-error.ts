import type { AssertionResult } from './assertion-result';
// eslint-disable-next-line @typescript-eslint/no-shadow
import { toString } from '@colonise/utilities';

export class AssertionError<TSubject, TActual, TExpected> extends Error {
    public readonly result: AssertionResult<TSubject, TActual, TExpected>;

    public constructor(result: AssertionResult<TSubject, TActual, TExpected>, message: unknown) {
        super(toString(message));

        this.result = result;
    }
}
