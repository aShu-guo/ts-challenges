type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type ReadonlyArr<T> = {
    readonly [K in keyof T]: T[K]
}
type Length<T> = T extends ReadonlyArr<any[]> ? T['length'] : never

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5

const a: teslaLength = 4

/**
 *
 */
