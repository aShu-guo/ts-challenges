// ============= Test Cases =============
import type {Equal, Expect} from '../test-utils'

type cases = [
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]


// ============= Your Code Here =============


// 疑问1:为什么类型不一样？
type MyExclude<T, U> = T extends U ? never : T
type item1 = MyExclude<string | number, string>
// type: number
const a: item1 = 1212

type item4 = (string | number) extends string ? never : string | number;
// type: sting|number
const b: item4 = '123123'
const c: item4 = 123

