// ============= Test Cases =============
import type { Equal, Expect } from '../test-utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
    Expect<Equal<MyAwaited<X>, string>>,
    Expect<Equal<MyAwaited<Y>, { field: number }>>,
    Expect<Equal<MyAwaited<Z>, string | number>>,
]

type error = MyAwaited<number>


// ============= Your Code Here =============
type MyAwaited<T> = T extends Promise<infer D> ? MyAwaited<D> : T;

// type: string
type item = MyAwaited<X>

// type: { field: number }
type item2 = MyAwaited<Y>

// type: string | number
type item3 = MyAwaited<Z>


