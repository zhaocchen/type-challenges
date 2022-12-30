// type StringToArray<S extends string> = S extends `${infer A}${infer B}` ? [A, ...StringToArray<B>] : [];
// type LengthOfString<S extends string> = StringToArray<S>['length'];

type LengthOfString<S extends string, T extends any[] = []> = S extends `${infer A}${infer B}` ? LengthOfString<B, [A, ...T]> : T['length']
