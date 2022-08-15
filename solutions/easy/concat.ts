// ============= Test Cases =============
import type { Equal, Expect } from '../test-utils'

type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]


// ============= Your Code Here =============
type Concat<T1 extends any[], T2 extends any[]> = [...T1, ...T2]

type item1 = Concat<[1], [2]> // expected to be [1, 2]
type item2 = Concat<[1, 3], [2]> // expected to be [1, 3, 2]
