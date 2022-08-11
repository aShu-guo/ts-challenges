> void

表示没有返回值的类型

例如：校验提交的字段不符合规则时，直接return终止执行后续逻辑

```typescript
function validate(form): void {
    if (!isValid(form.password)) {
        return
    } else {
        throw new Error('密码格式有误')
    }
}
```



> never

表示永远不存在值的类型

一个永远不会返回或者抛出异常的函数的返回值

```typescript
function fail(message: string): never {
    throw new Error(message);
}
```

