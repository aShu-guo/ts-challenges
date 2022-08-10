// expected to be string
type HelloWorld = any

interface Expect<T> {
}

interface Equal<T, D> {
    
}

// you should make this work
type test = Expect<Equal<HelloWorld, string>>
