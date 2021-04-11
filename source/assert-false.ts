import { assert } from './assert';
import type { AssertionResult } from './assertion-result';

export function assertFalse<TSubject>(subject: TSubject): AssertionResult<TSubject, TSubject, false>;
export function assertFalse<TSubject>(subject: TSubject, reverse: boolean): AssertionResult<TSubject, TSubject, false>;
export function assertFalse(subject: unknown, reverse: boolean = false): AssertionResult<unknown, unknown, false> {
    return assert(subject, subject, false, subject === false, 'Expected %subject% to %reverse=not %be false.', reverse);
}
