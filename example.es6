import getScaleFromInfo from './'

getScaleFromInfo({
  from: [0, 0], // position to scale from x, y
  scale: [10, 2], // amount to scale x, y (scale can be non-uniform)
  size: [1, 1], // current dimensions
  position: [0, 2] // current position
})
// returns updated postion and dimensions
// { size: [10, 2], position: [0, 4] }

getScaleFromInfo({
  from: [0, 8], // position to scale from x, y
  scale: [0.5, 2], // amount to scale x, y (scale can be non-uniform)
  size: [4, 4], // current dimensions
  position: [4, 0] // current position
})
// returns updated postion and dimensions
// { size: [2, 8], position: [2, -8] }
