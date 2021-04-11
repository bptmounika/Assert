import { assert } from './assert';
import type { AssertionResult } from './assertion-result';
import { assertNull } from './assert-null';
import { assertUndefined } from './assert-undefined';

export function assertIn<TSubject, TExpected extends keyof TSubject>(subject: TSubject, expected: TExpected): AssertionResult<TSubject, TSubject, TExpected>;
export function assertIn<TSubject, TExpected extends keyof TSubject>(
    subject: TSubject,
    expected: TExpected,
    reverse: boolean
): AssertionResult<TSubject, TSubject, TExpected>;
export function assertIn(subject: unknown, expected: string, reverse: boolean = false): AssertionResult<unknown, unknown, unknown> {
    assertUndefined(subject, true);
    assertNull(subject, true);

    return assert(subject, subject, expected, expected in <{ [key: string]: unknown; }>subject, 'Expected %expected% to %reverse=not %be in %subject%.', reverse);
}
