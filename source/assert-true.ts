import { assert } from './assert';
import type { AssertionResult } from './assertion-result';

export function assertTrue<TSubject>(subject: TSubject): AssertionResult<TSubject, TSubject, true>;
export function assertTrue<TSubject>(subject: TSubject, reverse: boolean): AssertionResult<TSubject, TSubject, true>;
export function assertTrue(subject: unknown, reverse: boolean = false): AssertionResult<unknown, unknown, true> {
    return assert(subject, subject, true, subject === true, 'Expected %subject% to %reverse=not %be true.', reverse);
}
