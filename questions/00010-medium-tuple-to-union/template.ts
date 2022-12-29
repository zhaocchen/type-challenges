// type TupleToUnion<T> = T extends [infer A, ...infer B] ? A | TupleToUnion<B> : never;
type TupleToUnion<T extends any[]> = T[number];