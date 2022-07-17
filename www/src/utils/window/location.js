/* eslint-disable no-return-assign */
import { parseContent } from '@/utils/character/standard'

const hash = {
  get: () => decodeURI(window.location.hash.slice(1)).replaceAll('+', ' '),
  set: (hashVal) =>
    (window.location.hash = parseContent(hashVal).replaceAll(' ', '+')),
  amend: () => {
    const hashVal = decodeURI(window.location.hash.slice(1))
    if (hashVal.search(' ') === -1) return false
    hash.set(hashVal)
    return true
  }
}
const pathname = {
  get: () => window.location.pathname,
  set: (path) => (window.location.pathname = path)
}
const title = {
  get: () => document.title,
  set: (titleVal) => (document.title = `VARBook - ${titleVal}`)
}

const copy = {
  text: (styleKey, value) => {
    try {
      const input = document.createElement('input')
      input.value = value
      document.body.appendChild(input)
      input.select()
      // noinspection JSDeprecatedSymbols
      document.execCommand('Copy')
      document.body.removeChild(input)
      window.localStorage.setItem('varBook-auto-copy-style-key', styleKey)
    } catch (e) {
      return false
    }
    return true
  },
  auto: (namedVariables) => {
    const styleKey = window.localStorage.getItem('varBook-auto-copy-style-key')
    if (!styleKey || !namedVariables[styleKey]) return null
    if (copy.text(styleKey, namedVariables[styleKey])) return styleKey
    return null
  }
}

export { copy, hash, pathname, title }
