/**
 * Imports
 */

import wnd from 'global/window'
import morph from '@f/morph-obj'

/**
 * Constants
 */

const map = wnd.__vduxComponents__ = wnd.__vduxComponents__ || {}

/**
 * Vdux Transform HMR
 */

function transform ({filename, components}) {
  return (component, uid) => {
    if (components[uid].isInFunction) return component

    const guid = filename + '$' + uid

    return (map[guid] = map[guid]
      ? morph(map[guid], component)
      : component)
  }
}

/**
 * Exports
 */

export default transform
