import { AssertionError } from './assertion-error';
import { AssertionResult } from './assertion-result';
import {
    isFunction,
    toDisplayString
} from '@colonise/utilities';

// eslint-disable-next-line max-params
function parseAssertionMessage(
    message: string,
    subject: unknown,
    actual: unknown,
    expected: unknown,
    result: boolean,
    reverse: boolean
): string {
    const stringifiedSubject = toDisplayString(subject);
    const stringifiedActual = toDisplayString(actual);
    const stringifiedExpected = toDisplayString(expected);

    return message
        .replace(/%subject%/gu, stringifiedSubject)
        .replace(/%actual%/gu, stringifiedActual)
        .replace(/%expected%/gu, stringifiedExpected)
        .replace(/%(?:success|succeed|succeeded)=(.+?)%/gu, value => {
            if (!result) {
                return '';
            }

            return /%(?:success|succeed|succeeded)=(.+?)%/u.exec(value)?.[1] ?? '';
        })
        .replace(/%(?:fail|failed)=(.+?)%/gu, value => {
            if (result) {
                return '';
            }

            return /%(?:fail|failed)=(.+?)%/u.exec(value)?.[1] ?? '';
        })
        .replace(/%reverse=(.+?)%/gu, value => {
            if (!reverse) {
                return '';
            }

            return /%reverse=(.+?)%/u.exec(value)?.[1] ?? '';
        });
}

export function assert<TSubject, TActual, TExpected>(
    subject: TSubject,
    actual: TActual,
    expected: TExpected,
    asserter: (subject: TSubject, actual: TActual, expected: TExpected) => boolean,
    message: string
): AssertionResult<TSubject, TActual, TExpected>;
export function assert<TSubject, TActual, TExpected>(
    subject: TSubject,
    actual: TActual,
    expected: TExpected,
    asserter: (subject: TSubject, actual: TActual, expected: TExpected) => boolean,
    message: string,
    reverse: boolean
): AssertionResult<TSubject, TActual, TExpected>;
export function assert<TSubject, TActual, TExpected>(
    subject: TSubject,
    actual: TActual,
    expected: TExpected,
    result: boolean,
    message: string
): AssertionResult<TSubject, TActual, TExpected>;
export function assert<TSubject, TActual, TExpected>(
    subject: TSubject,
    actual: TActual,
    expected: TExpected,
    result: boolean,
    message: string,
    reverse: boolean
): AssertionResult<TSubject, TActual, TExpected>;
// eslint-disable-next-line max-params
export function assert(
    subject: unknown,
    actual: unknown,
    expected: unknown,
    resultOrAsserter: boolean | ((subject: unknown, actual: unknown, expected: unknown) => boolean),
    message: string,
    reverse: boolean = false
): AssertionResult<unknown, unknown, unknown> {
    const result = isFunction(resultOrAsserter) ? resultOrAsserter(subject, actual, expected) : resultOrAsserter;

    const parsedMessage = parseAssertionMessage(message, subject, actual, expected, result, reverse);

    const assertionResult = new AssertionResult(subject, actual, expected, reverse, result, parsedMessage);

    if (!assertionResult.result) {
        throw new AssertionError(assertionResult, parsedMessage);
    }

    return assertionResult;
}
