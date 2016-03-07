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

function transform ({filename}) {
  return (component, uid) => {
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
