// ============= Test Cases =============
import type {Equal, Expect} from '../test-utils'


type cases = [
    Expect<Equal<Unshift<[], 1>, [1]>>,
    Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
    Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]


// ============= Your Code Here =============
// 实现了类似flat的效果
/*type Unshift<T extends any[], U> = U extends any[] ? [...U, ...T] : [U, ...T]

// type：[true, "1", 2, "3"] ｜ [false, "1", 2, "3"]
type A = Unshift<['1', 2, '3'], boolean>*/

type Unshift<T extends any[], U> = [U, ...T];
type B = Unshift<[1, 2], [0]>
