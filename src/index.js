/**
 * Imports
 */

import wnd from 'global/window'

/**
 * Constants
 */

const map = {}

/**
 * Vdux Transform HMR
 */

function transform ({filename}) {
  return (component, uid) => {
    const guid = filename + '$' + uid

    return map[guid]
      : updateObject(map[guid], component)
      ? component
  }
}

/**
 * Update an existing object to be identical
 * to a new one
 */

function updateObject (oldObj, newObj) {
  for (let key in obj) {
    delete oldObj[key]
  }

  for (let key in newObj) {
    oldObj[key] = newObj[key]
  }

  return oldObj
}

/**
 * Exports
 */

export default transform
