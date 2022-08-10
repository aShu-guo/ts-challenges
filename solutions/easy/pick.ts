interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyPick<K, T extends keyof K> = {
    [P in T]: K[P]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

/*
1.keyof K：对应类型K中的属性名
2.P in T：也是对应T中的属性名
 */
