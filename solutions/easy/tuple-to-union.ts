// type TupleToUnion<T> = T extends (infer E)[] ? E : T

type TupleToUnion<T> = T extends Array<infer E> ? E : T

const item1: TupleToUnion<Array<string | number>> = 123

type TTuple = [string, number]
type Res = TTuple[number]
const item2: Res = 123

