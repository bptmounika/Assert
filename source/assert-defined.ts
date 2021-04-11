import { assert } from './assert';
import type { AssertionResult } from './assertion-result';

export function assertDefined<TSubject>(subject: TSubject): AssertionResult<TSubject, TSubject, never>;
export function assertDefined<TSubject>(subject: TSubject, reverse: boolean): AssertionResult<TSubject, TSubject, never>;
export function assertDefined(subject: unknown, reverse: boolean = false): AssertionResult<unknown, unknown, unknown> {
    return assert(subject, subject, undefined, subject !== null && subject !== undefined, 'Expected %subject% to %reverse=not %be defined.', reverse);
}
