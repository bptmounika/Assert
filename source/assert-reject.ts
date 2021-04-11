import { assert } from './assert';
import { assertIn } from './assert-in';
import type { AssertionResult } from './assertion-result';

export const assertRejectAnything = Symbol('assertReject() anything');

export async function assertReject<TSubject extends PromiseLike<unknown>, TExpected>(
    subject: TSubject,
    expected: TExpected
): Promise<AssertionResult<TSubject, unknown, TExpected>>;
export async function assertReject<TSubject extends PromiseLike<unknown>, TExpected>(
    subject: TSubject,
    expected: TExpected,
    reverse: boolean
): Promise<AssertionResult<TSubject, unknown, TExpected>>;
export async function assertReject(
    subject: PromiseLike<unknown>,
    expected: unknown,
    reverse: boolean = false
): Promise<AssertionResult<unknown, unknown, unknown>> {
    assertIn(subject, 'then');

    if (expected === assertRejectAnything) {
        try {
            const actual = await subject;

            return assert(subject, actual, expected, false, 'Expected %subject% to %reverse=not %reject, but it resolved with %actual%.', reverse);
        }
        catch (actual: unknown) {
            return assert(subject, actual, expected, true, 'Expected %subject% to %reverse=not %reject.', reverse);
        }
    }
    else {
        try {
            const actual = await subject;

            return assert(subject, actual, expected, false, 'Expected %subject% to %reverse=not %reject with %expected%, but it resolved with %actual%.', reverse);
        }
        catch (actual: unknown) {
            return assert(subject, actual, expected, actual === expected, 'Expected %subject% to %reverse=not %reject with %expected%%failed=, but it rejected with %actual%%.', reverse);
        }
    }
}
