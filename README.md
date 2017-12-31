# d0l
> Deterministic context-free [L-system](https://en.wikipedia.org/wiki/L-system), for CommonJS.

# Install
    npm install d0l

# Usage
```javascript
const D0L  = require('d0l');


const axiom = 'A';
const generations = [ axiom ]; 
const productions = new Map()
  .set('A', 'AB')
  .set('B', 'A');
const d0l = new D0L(productions);


while (generations.length < 10) {
    const newGeneration = d0l.derive(generations[generations.length - 1]);
    generations.push(newGeneration);
}


console.log(generations);
```
```javascript
[ 'A',
  'AB',
  'ABA',
  'ABAAB',
  'ABAABABA',
  'ABAABABAABAAB',
  'ABAABABAABAABABAABABA',
  'ABAABABAABAABABAABABAABAABABAABAAB',
  'ABAABABAABAABABAABABAABAABABAABAABABAABABAABAABABAABABA',
  'ABAABABAABAABABAABABAABAABABAABAABABAABABAABAABABAABABAABAABABAABAABABAABABAABAABABAABAAB' ]
```

# API

## new D0L(productions)

Create a new Deterministic context-free L-System.

### productions

Type: `Map`

All the rules for this D0L system.

## D0L.prototype.derive(previousGeneration)

Compute a new generation, given the previous generation, for a D0L system.

### previousGeneration

Type: `String`

Previously computed Symbol sequence from a iteration, or the axiom, when no other iteration is computed yet.

### return

Type: `String`

Computed Symbol sequence for this iteration.

# Notes

*Deterministic* means that a `production: (predecessor: Array<Symbol>) => sucessor`, for a given `predecessor: Array<Symbol>` argument, will manifest a single `sucessor: Array<Symbol>`.

L-systems that must derive more that one `sucessor: Array<Symbol>`, determined by weighted probability during each iteration, are *stochastic* L-systems, and **not supported** by this library.


*context-free* means that a `production: (predecessor: Array<Symbol>) => sucessor`, for any `predecessor`, `predecessor` is a sequence contains only one `Symbol`.

L-systems that support more that one `Symbol` as a `predecessor` argument are *context-sensitive* L-systems, and **not supported** by this library.

For performance reasons, `Symbol` in this library is a `symbol: String` where `symbol.lenght === 1`, and `Array<Symbol>` is an arbitrary `String`.
