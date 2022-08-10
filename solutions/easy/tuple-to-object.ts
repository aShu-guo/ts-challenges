const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K
}

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple>

const toObject: (arr: number[]) => TupleToObject<number[]> = (arr: number[]) => {
    let obj = {}
    arr.map(item => {
        obj[item] = item
    })
    return {}
}


// 函数？泛型？联系是什么？
/*
定义函数类型：声明式 函数表达式
约束函数入口与出口类型
 */

// 声明式
function Fun(a: number, b: number): number {
    return a + b
}

// 函数表达式
const Fun2: () => string = () => {
    return ''
}

// interface 定义
interface Fun3 {
    (a: string, b: string): string
}

let fun3: Fun3 = (a, b) => {
    return ''
}


