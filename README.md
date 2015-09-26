# get-scale-from-info

Calculate the size and position of scaling (uniformly or not) on multiple axis' from any point. This works well for any system that calculates from the top or left, like your browser's dom!

[![Build Status](https://travis-ci.org/willhoag/get-scale-from-info.svg)](https://travis-ci.org/willhoag/get-scale-from-info)
[![npm version](https://badge.fury.io/js/get-scale-from-info.svg)](http://badge.fury.io/js/get-scale-from-info)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install get-scale-from-info --save
```

## Usage

```js
// require module
let getScaleFromInfo = requrie('get-scale-from-info')

getScaleFromInfo({
  from: [0, 0], // scale from position
  scale: [10, 2], // amount to scale
  size: [1, 1], // current size
  position: [0, 2] // current position
})
// returns updated postion and dimensions
// { size: [10, 2], position: [0, 4] }

getScaleFromInfo({
  from: [0, 8],
  scale: [0.5, 2],
  size: [4, 4],
  position: [4, 0]
})
// returns updated postion (top left) and dimensions
// { size: [2, 8], position: [2, -8] }

```

## API

```js
getScaleFromInfo(spec: Object)
```

### spec object parameters (required)


``` js
{
  from: Array, // The [x, y, z] position to scale from
  scale: Array, // The [multiplierX, multiplierY, multiplierZ] amount to scale from position listed above (scale can be non-uniform)
  size: Array, // Current dimensions in [x, y, z] format
  position: Array // The current position in [x, y, z] format
}
```

### returns
``` js
{
  size: Array, // The new (post-scale) [x, y] dimensions
  position: Array // The new (post-scale) [x, y] position
}
```

## License

MIT
