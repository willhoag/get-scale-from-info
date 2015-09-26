import getScaleFromInfo from './'
import tape from 'tape'

tape('should return the correct values', function (assert, done) {
  assert.deepEqual(getScaleFromInfo({
    from: [0, 0],
    scale: [10, 2],
    size: [1, 1],
    position: [0, 2]
  }), {
    size: [10, 2],
    position: [0, 4]
  })
  assert.deepEqual(getScaleFromInfo({
    from: [0, 8],
    scale: [0.5, 2],
    size: [4, 4],
    position: [4, 0]
  }), {
    size: [2, 8],
    position: [2, -8]
  })
  assert.end()
})
