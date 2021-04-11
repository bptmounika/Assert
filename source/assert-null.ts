import { assert } from './assert';
import type { AssertionResult } from './assertion-result';

// eslint-disable-next-line @typescript-eslint/ban-types
export function assertNull<TSubject>(subject: TSubject): AssertionResult<TSubject, TSubject, null>;
// eslint-disable-next-line @typescript-eslint/ban-types
export function assertNull<TSubject>(subject: TSubject, reverse: boolean): AssertionResult<TSubject, TSubject, null>;
// eslint-disable-next-line @typescript-eslint/ban-types
export function assertNull(subject: unknown, reverse: boolean = false): AssertionResult<unknown, unknown, null> {
    return assert(subject, subject, null, subject === null, 'Expected %subject% to %reverse=not %be null.', reverse);
}
