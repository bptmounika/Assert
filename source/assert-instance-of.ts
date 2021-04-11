import { assert } from './assert';
import type { AssertionResult } from './assertion-result';
import type { Constructor } from '@colonise/utilities';

export function assertInstanceOf<TSubject, TExpected extends Constructor<TSubject>>(
    subject: TSubject,
    expected: TExpected
): AssertionResult<TSubject, TSubject, TExpected>;
export function assertInstanceOf<TSubject, TExpected extends Constructor<TSubject>>(
    subject: TSubject,
    expected: TExpected,
    reverse: boolean
): AssertionResult<TSubject, TSubject, TExpected>;
export function assertInstanceOf(subject: unknown, expected: Constructor, reverse: boolean = false): AssertionResult<unknown, unknown, unknown> {
    return assert(subject, subject, expected, subject instanceof expected, 'Expected %subject% to %reverse=not %be an instance of %expected%.', reverse);
}
