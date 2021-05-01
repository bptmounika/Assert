import { assert } from './assert';
import { assertIn } from './assert-in';
import type { AssertionResult } from './assertion-result';

export const assertResolveAnything = Symbol('assertResolve() anything');

export async function assertResolve<TSubject extends PromiseLike<unknown>>(
    subject: TSubject
): Promise<AssertionResult<TSubject, unknown, unknown>>;
export async function assertResolve<TSubject extends PromiseLike<unknown>, TExpected>(
    subject: TSubject,
    expected: TExpected
): Promise<AssertionResult<TSubject, unknown, TExpected>>;
export async function assertResolve<TSubject extends PromiseLike<unknown>, TExpected>(
    subject: TSubject,
    expected: TExpected,
    reverse: boolean
): Promise<AssertionResult<TSubject, unknown, TExpected>>;
export async function assertResolve(
    subject: PromiseLike<unknown>,
    expected: unknown = assertResolveAnything,
    reverse: boolean = false
): Promise<AssertionResult<unknown, unknown, unknown>> {
    assertIn(subject, 'then');

    if (expected === assertResolveAnything) {
        try {
            const actual = await subject;

            return assert(subject, actual, expected, !reverse, 'Expected %subject% to %reverse=not %resolve%failed=, but it resolved with %actual%%.', reverse);
        }
        catch (actual: unknown) {
            return assert(subject, actual, expected, !reverse, 'Expected %subject% to %reverse=not %resolve%failed=, but it rejected with %actual%%.', reverse);
        }
    }
    else {
        try {
            const actual = await subject;

            return assert(subject, actual, expected, actual === expected, 'Expected %subject% to %reverse=not %resolve with %expected%%failed=, but it resolved with %actual%%.', reverse);
        }
        catch (actual: unknown) {
            return assert(subject, actual, expected, false, 'Expected %subject% to %reverse=not %resolve %expected%, but it rejected with %actual%.', reverse);
        }
    }
}
