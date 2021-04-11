import { assert } from './assert';
import { AssertionError } from './assertion-error';
import { AssertionResult } from './assertion-result';

export function assertTypeOf<TSubject>(subject: TSubject, expected: 'string'): AssertionResult<TSubject, TSubject, string>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'number'): AssertionResult<TSubject, TSubject, number>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'bigint'): AssertionResult<TSubject, TSubject, bigint>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'boolean'): AssertionResult<TSubject, TSubject, boolean>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'symbol'): AssertionResult<TSubject, TSubject, symbol>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'undefined'): AssertionResult<TSubject, TSubject, undefined>;
// eslint-disable-next-line @typescript-eslint/ban-types
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'object'): AssertionResult<TSubject, TSubject, object>;
// eslint-disable-next-line @typescript-eslint/ban-types
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'function'): AssertionResult<TSubject, TSubject, Function>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'string', reverse: boolean): AssertionResult<TSubject, TSubject, string>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'number', reverse: boolean): AssertionResult<TSubject, TSubject, number>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'bigint', reverse: boolean): AssertionResult<TSubject, TSubject, bigint>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'boolean', reverse: boolean): AssertionResult<TSubject, TSubject, boolean>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'symbol', reverse: boolean): AssertionResult<TSubject, TSubject, symbol>;
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'undefined', reverse: boolean): AssertionResult<TSubject, TSubject, undefined>;
// eslint-disable-next-line @typescript-eslint/ban-types
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'object', reverse: boolean): AssertionResult<TSubject, TSubject, object>;
// eslint-disable-next-line @typescript-eslint/ban-types
export function assertTypeOf<TSubject>(subject: TSubject, expected: 'function', reverse: boolean): AssertionResult<TSubject, TSubject, Function>;
export function assertTypeOf(subject: unknown, expected: string, reverse: boolean = false): AssertionResult<unknown, unknown, unknown> {
    switch (expected) {
        case 'string':
            return assert(subject, subject, expected, typeof subject === expected, 'Expected %subject% to %reverse=not %be a string.', reverse);

        case 'number':
            return assert(subject, subject, expected, typeof subject === expected, 'Expected %subject% to %reverse=not %be a number.', reverse);

        case 'bigint':
            return assert(subject, subject, expected, typeof subject === expected, 'Expected %subject% to %reverse=not %be a BigInt.', reverse);

        case 'boolean':
            return assert(subject, subject, expected, typeof subject === expected, 'Expected %subject% to %reverse=not %be a boolean.', reverse);

        case 'symbol':
            return assert(subject, subject, expected, typeof subject === expected, 'Expected %subject% to %reverse=not %be a symbol.', reverse);

        case 'undefined':
            return assert(subject, subject, expected, typeof subject === expected, 'Expected %subject% to %reverse=not %be undefined.', reverse);

        case 'object':
            return assert(subject, subject, expected, typeof subject === expected, 'Expected %subject% to %reverse=not %be an object.', reverse);

        case 'function':
            return assert(subject, subject, expected, typeof subject === expected, 'Expected %subject% to %reverse=not %be a function.', reverse);

        default: {
            // eslint-disable-next-line @typescript-eslint/quotes
            const message = `Parameter 'expected' must be 'string', 'number', 'bigint', 'boolean', 'symbol', 'undefined', 'object', or 'function', got %expected%.`;

            throw new AssertionError(new AssertionResult(subject, subject, expected, reverse, false, message), message);
        }
    }
}
