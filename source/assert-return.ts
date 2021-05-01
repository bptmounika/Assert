import { assert } from './assert';
import type { AssertionResult } from './assertion-result';
import { assertTypeOf } from './assert-type-of';

export const assertReturnAnything = Symbol('assertReturn() anything');

export function assertReturn<TSubject extends () => unknown, TExpected>(
    subject: TSubject
): AssertionResult<TSubject, unknown, TExpected>;
export function assertReturn<TSubject extends () => unknown, TExpected>(
    subject: TSubject,
    expected: TExpected
): AssertionResult<TSubject, unknown, TExpected>;
export function assertReturn<TSubject extends () => unknown, TExpected>(
    subject: TSubject,
    expected: TExpected,
    reverse: boolean
): AssertionResult<TSubject, unknown, TExpected>;
export function assertReturn(
    subject: () => unknown,
    expected: unknown = assertReturnAnything,
    reverse: boolean = false
): AssertionResult<unknown, unknown, unknown> {
    assertTypeOf(subject, 'function');

    if (expected === assertReturnAnything) {
        try {
            const actual = subject();

            return assert(subject, actual, expected, !reverse, 'Expected %subject% to %reverse=not %return%failed=, but it returned %actual%%.', reverse);
        }
        catch (actual: unknown) {
            return assert(subject, actual, expected, !reverse, 'Expected %subject% to %reverse=not %return%failed=, but it threw %actual%%.', reverse);
        }
    }
    else {
        try {
            const actual = subject();

            return assert(subject, actual, expected, actual === expected, 'Expected %subject% to %reverse=not %return %expected%%failed=, but it returned %actual%%.', reverse);
        }
        catch (actual: unknown) {
            return assert(subject, actual, expected, false, 'Expected %subject% to %reverse=not %return %expected%, but it threw %actual%.', reverse);
        }
    }
}
