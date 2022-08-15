> 对extends的理解

只要类A拥有类B的所有非私有的"特征"，那么可以称A继承与B

```ts
type isExtend<T, T2> = T extends T2 ? true : false

// type: true
type item1 = isExtend<{ name: 'xiaoming', age: 23 }, { name: 'xiaoming' }>
```
