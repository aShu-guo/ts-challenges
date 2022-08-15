// ============= Test Cases =============
import type { Equal, Expect } from '../test-utils'

type cases = [
    Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}


// ============= Your Code Here =============

interface Todo {
    title: string
    description: string
}

/**
 * 内置的Readonly类型
 */
const builtInReadonly: Readonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

builtInReadonly.title = "Hello" // Error: cannot reassign a readonly property
builtInReadonly.description = "barFoo" // Error: cannot reassign a readonly property

/**
 * ts提供的readonly关键词
 */
type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property

