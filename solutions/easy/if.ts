// ============= Test Cases =============
import type { Equal, Expect } from '../test-utils'

type cases = [
    Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
    Expect<Equal<If<false, 'a', 2>, 2>>,
]

type error = If<null, 'a', 'b'>


// ============= Your Code Here =============

// T1 是boolean类型时，true为T2，false为T3。没有满足T1只能为false or true
// type If<T1, T2, T3> = T1 extends boolean ? T2 : T3

type If<T1 extends boolean, T2, T3> = T1 extends true ? T2 : T3

type A1 = If<true, 'a', 'b'>  // expected to be 'a'
type B1 = If<false, 'a', 'b'> // expected to be 'b'


