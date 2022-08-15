// ============= Test Cases =============
import type {Equal, Expect} from '../test-utils'

type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
    // @ts-expect-error
    First<'notArray'>,
    // @ts-expect-error
    First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============

// 约束了First的类型之后，还可以继续约束泛型T的类型
type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = Extract<T[number], T[0]>
// type First<T extends any[]> = T extends [infer First, ...any] ? First : never


/**
 * 为什么type First<T extends any[]> = any; 不可行
 * 原因：仅满足了返回数组中的任意位置的变量的类型，要求是返回第一个位置的变量类型
 */

/**
 * 关键字
 * 1.infer：表示在 extends 条件语句中待推断的类型变量（提取出泛型中的类型）
 * 2.never：从未被观察到的值？如果作为返回值类型，意味着函数抛出异常或者被终止
 *
 * 类型巩固--数组
 * 1.声明数组类型的3种方式
 * 类型+方括号：number[] // 更推荐
 * 泛型：Array<number>
 * interface：interface Arr{[index:number]:number}
 *
 * 2.一些特殊数组类型
 * []：作为类型声明时，表示没有任何值的空数组类型；作为值时，表示any[]
 * [string]：表示只有一个值的字符串数组类型
 * Array<string|number>  等价于  (string|number)[]：表示数组中可以包含strign或者number类型
 *      所以元组在一定条件下是可以赋值给数组类型的
 *
 *
 */

/**
 *  拓展：协变、逆变
 *  参考：
 *  1.https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html#%E4%B8%80%E4%B8%AA%E6%9C%89%E8%B6%A3%E7%9A%84%E9%97%AE%E9%A2%98
 *  2.https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/207.%E7%B2%BE%E8%AF%BB%E3%80%8ATypescript%20infer%20%E5%85%B3%E9%94%AE%E5%AD%97%E3%80%8B.md
 *  3.
 */
type ArrayElementType<T> = T extends (infer E)[] ? E : T

// number
type item1 = ArrayElementType<number>
// string
type item2 = ArrayElementType<string[]>
// {name:string}
type item3 = ArrayElementType<{ name: string }>

// number | string ---协变---或---类型收敛
type item4 = ArrayElementType<[number, string]>

type Bar<T> = T extends { a: (x: infer U) => void; b: (y: infer U) => void } ? U : never
// string && number 即never ---逆变---且---类型发散
type item5 = Bar<{ a: (x: string) => void; b: (y: number) => void }>
// 参数类型可以是发散的，但是返回值类型必须是收敛的
