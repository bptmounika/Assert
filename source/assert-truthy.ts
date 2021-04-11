import { assert } from './assert';
import type { AssertionResult } from './assertion-result';
import { toBoolean } from '@colonise/utilities';

export function assertTruthy<TSubject>(subject: TSubject): AssertionResult<TSubject, TSubject, never>;
export function assertTruthy<TSubject>(subject: TSubject, reverse: boolean): AssertionResult<TSubject, TSubject, never>;
export function assertTruthy(subject: unknown, reverse: boolean = false): AssertionResult<unknown, unknown, unknown> {
    return assert(subject, subject, undefined, toBoolean(subject), 'Expected %subject% to %reverse=not %be truthy.', reverse);
}
