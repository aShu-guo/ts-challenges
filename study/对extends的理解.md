> 对extends的理解

只要类A拥有类B的所有非私有的"特征"，那么可以称A继承与B

```ts
type isExtend<T, T2> = T extends T2 ? true : false

// type: true
type item1 = isExtend<{ name: 'xiaoming', age: 23 }, { name: 'xiaoming' }>
```

> Type 与 interface的区别

1.interface 多次声明可以合并属性；但type不可以

2.interface 继承使用关键字extends；type使用"&"符号

3.都可以用于声明类型的形状

建议优先使用interface，在必须使用type时才去使用
