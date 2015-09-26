import getSingleAxisScaleFromInfo from 'get-single-axis-scale-from-info'
import splitProps from 'split-props'
import objectZip from 'obj-merge'

export default function getScaleFromInfo (spec) {
  return objectZip(
    ...splitProps(spec).map(getSingleAxisScaleFromInfo)
  )
}
