/**
 * Gets props from a directive.
 *
 * @example
 *     getProps('.hello #world')
 *     // => { className: ['hello'], id: 'world' }
 */

export default function getProps (str /*: string */) {
  let m
  let result = {}

  while (str.length > 0) {
    if (m = str.match(/^\s*\.([a-zA-Z0-9\-_]+)/)) {
      if (!result.className) result.className = []
      result.className.push(m[1])
      shift()
    } else if (m = str.match(/^\s*#([a-zA-Z0-9\-_]+)/)) {
      result.id = m[1]
      shift()
    } else if (m = str.match(/^\s*([a-zA-Z0-9\-_]+)="([^"]*)"/)) {
      result[m[1]] = m[2]
      shift()
    } else if (m = str.match(/^\s*([a-zA-Z0-9\-_]+)='([^']*)'/)) {
      result[m[1]] = m[2]
      shift()
    } else if (m = str.match(/^\s*([a-zA-Z0-9\-_]+)=([^ ]*)/)) {
      result[m[1]] = m[2]
      shift()
    } else if (m = str.match(/^\s*([a-zA-Z0-9\-_]+)/)) {
      result[m[1]] = true
      shift()
    } else if (m = str.match(/^\s+/)) {
      shift()
    } else {
      return result
    }
  }

  return result

  function shift () {
    str = str.substr(m[0].length)
  }
}
