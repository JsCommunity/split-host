# split-host [![Build Status](https://travis-ci.org/JsCommunity/split-host.png?branch=master)](https://travis-ci.org/JsCommunity/split-host)

> Split host into hostname and port

## Install

Installation of the [npm package](https://npmjs.org/package/split-host):

```
> npm install --save split-host
```

## Usage

```js
import splitHost from 'split-host'

splitHost('localhost:80')
// → { host: 'localhost', hostname: 'localhost', port: '80' }

splitHost('localhost')
// → { host: 'localhost', hostname: 'localhost' }

splitHost('80')
// → { port: 80 }
```

> `host` is provided as an alias for `hostname` because a lot of
> Node's APIs expect such an entry.

## Development

```
# Install dependencies
> npm install

# Run the tests
> npm test

# Continuously compile
> npm run dev

# Continuously run the tests
> npm run dev-test

# Build for production (automatically called by npm install)
> npm run build
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/JsCommunity/split-host/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](https://github.com/julien-f)
