import { assert } from './assert';
import type { AssertionResult } from './assertion-result';

export function assertUndefined<TSubject>(subject: TSubject): AssertionResult<TSubject, TSubject, undefined>;
export function assertUndefined<TSubject>(subject: TSubject, reverse: boolean): AssertionResult<TSubject, TSubject, undefined>;
export function assertUndefined(subject: unknown, reverse: boolean = false): AssertionResult<unknown, unknown, undefined> {
    return assert(subject, subject, undefined, subject === undefined, 'Expected %subject% to %reverse=not %be undefined.', reverse);
}
