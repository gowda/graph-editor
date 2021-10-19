# graph-editor

![](https://github.com/gowda/graph-editor/workflows/lint-and-tests/badge.svg)
![](https://github.com/gowda/graph-editor/workflows/cypress/badge.svg)

Graph editor inspired by [Directed Graph Editor](http://bl.ocks.org/rkirsling/5001347).

## Usage
#### Install dependencies

```bash
$ npm install
```

#### Run development server

```
$ npm run server
```

Development server listens at [http://localhost:3000](http://localhost:3000).
Can be changed by updating [webpack.development.ts](webpack.development.ts#L12).

#### Run linter

```bash
$ npm run lint
```

[ESLint](https://eslint.org/) is configured to extend from
[eslint-config-airbnb-typescript](https://github.com/airbnb/javascript)

Configuratin is in [.eslintrc.js](.eslintrc.js)

#### Run unit tests

```bash
$ npm run test
```

#### Run cypress tests

```bash
$ npm run features
```

or,

```bash
$ npm run cypress
```

## License

> "THE BEER-WARE LICENSE" (Revision 42):
> [Gowda](https://github.com/gowda) wrote this file. As long as you retain
> this notice you can do whatever you want with this stuff. If we meet
> some day, and you think this stuff is worth it, you can buy me a beer in return.
