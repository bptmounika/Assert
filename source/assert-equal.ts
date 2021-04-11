import { assert } from './assert';
import type { AssertionResult } from './assertion-result';

export function assertEqual<TSubject, TExpected extends TSubject>(subject: TSubject, expected: TExpected): AssertionResult<TSubject, TSubject, TExpected>;
export function assertEqual<TSubject, TExpected extends TSubject>(
    subject: TSubject,
    expected: TExpected,
    reverse: boolean
): AssertionResult<TSubject, TSubject, TExpected>;
export function assertEqual(subject: unknown, expected: unknown, reverse: boolean = false): AssertionResult<unknown, unknown, unknown> {
    // eslint-disable-next-line eqeqeq
    return assert(subject, subject, expected, subject == expected, 'Expected %subject% to %reverse=not %equal %expected%.', reverse);
}
