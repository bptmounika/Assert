import { assert } from './assert';
import type { AssertionResult } from './assertion-result';

export function assertStrictEqual<TSubject, TExpected extends TSubject>(subject: TSubject, expected: TExpected): AssertionResult<TSubject, TSubject, TExpected>;
export function assertStrictEqual<TSubject, TExpected extends TSubject>(
    subject: TSubject,
    expected: TExpected,
    reverse: boolean
): AssertionResult<TSubject, TSubject, TExpected>;
export function assertStrictEqual(subject: unknown, expected: unknown, reverse: boolean = false): AssertionResult<unknown, unknown, unknown> {
    return assert(subject, subject, expected, subject === expected, 'Expected %subject% to %reverse=not %stricly equal %expected%.', reverse);
}
