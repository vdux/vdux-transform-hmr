
# vdux-transform-hmr

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Transform for HMR in vdux

## Installation

    $ npm install vdux-transform-hmr

## Usage

Add it to your [vdux-transform](https://github.com/vdux/babel-plugin-vdux-transform) config, like this:

```javascript
{
  plugins: [
    ["vdux-transform", {
      "transforms": [{
        "transform": "vdux-transform-hmr"
      }]
    }]
  ]
}
```

## License

MIT
