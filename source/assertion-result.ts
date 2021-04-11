export class AssertionResult<TSubject, TActual, TExpected> {
    public readonly subject: TSubject;
    public readonly actual: TActual;
    public readonly expected: TExpected;
    public readonly reversed: boolean;
    public readonly result: boolean;
    public readonly message: string;

    // eslint-disable-next-line max-params
    public constructor(
        subject: TSubject,
        actual: TActual,
        expected: TExpected,
        reverse: boolean,
        result: boolean,
        message: string
    ) {
        this.subject = subject;
        this.actual = actual;
        this.expected = expected;
        this.reversed = reverse;
        this.result = reverse ? !result : Boolean(result);
        this.message = String(message);
    }
}
