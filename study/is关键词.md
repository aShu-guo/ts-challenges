> is 关键词

用于用户自定义类型保护：帮助我们改变和缩小类型范围（特别是在联合类型下）

位置放在函数返回值类型的处，如果函数return为true，则表示类型保护正确

```ts
// 仅仅是一个 interface
interface Foo {
    foo: number;
    common: string;
}

interface Bar {
    bar: number;
    common: string;
}

// 用户自己定义的类型保护！
function isFoo(arg: Foo | Bar): arg is Foo {
    return (arg as Foo).foo !== undefined
}

const getType = (val: unknown) => Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
const isString = (val: unknown): val is string => getType(val) === 'string'

const foo = (val: unknown) => isString(val) ? val.toUpperCase() : val


```
