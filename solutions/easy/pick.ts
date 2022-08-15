// ============= Test Cases =============
import type {Equal, Expect} from '../test-utils'

type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
}

interface Expected2 {
    title: string
    completed: boolean
}


// ============= Your Code Here =============
/**
 * K 并不一定是 T key的子类
 *  只需要拿出T中包含K的属性构成一个type
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}


/*
1.keyof K：取interface ｜ type中的键名，并返回联合类型
// type: name | age
type Demo = keyof { name: 'xiaoming', age: 23 }

2.P in T：用于取联合类型中的类型，不能用于interface
P是联合类型T中的一个
 */

type name = 'firstname' | 'lastname'
type Name = {
    [key in name]: string
}


