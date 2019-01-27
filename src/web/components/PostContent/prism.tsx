/* @flow */
/* global HTMLElement */

import loadjs from 'loadjs'
import debugjs from 'debug'

const debug = debugjs('app:Prism')

// Type for window.Prism
export type PrismType = {}

/**
 * Version of Prism.js to load from CDN
 */

export const PRISM_VERSION = '1.14.0'

/**
 * Map of language codes to prism plugin names.
 * See: https://cdn.jsdelivr.net/npm/prismjs/components/
 */

export const LANGUAGE_ALIASES: { [id: string]: string } = {
  coffee: 'coffeescript',
  dockerfile: 'docker',
  dosini: 'ini',
  jade: 'pug',
  js: 'javascript',
  make: 'makefile',
  md: 'markdown',
  rb: 'ruby',
  sh: 'bash',
  tsx: 'jsx',
  vimscript: 'vim',
  yml: 'yaml',
  zsh: 'bash'
}

/**
 * These languages don't exist (or are built in), don't load them
 */

export const LANGUAGE_IGNORE: { [key: string]: boolean } = {
  nohighlight: true,
  html: true
}

/**
 * Asynchrolously loads Prism, the syntax highlighter.
 * If `el` is given, it tries to infer all the languages used in code blocks
 * inside that element.
 *
 * @returns a Promise that resolves into the `Prism` instance.
 *
 * @example
 *     const Prism = await loadPrism()
 */

export function loadPrism(el?: HTMLElement): Promise<PrismType> {
  return Promise.resolve()
    .then(() => {
      const urls = getPrismURLs(el)
      debug('loadPrism() → Loading URLs', urls)
      return loadScripts(urls)
    })
    .then(() => {
      // @ts-ignore global.Prism
      return global.Prism as PrismType
    })
}

/**
 * Returns JS and CSS URLs to load.
 * If an `element` is given, it tries to detect what languages are in use in
 * that element.
 */

export function getPrismURLs(el?: HTMLElement): Array<string> {
  const languages = getLanguagesInElement(el)
  const languageURLs = languages.map((lang: string) => getLanguageURL(lang))

  return [
    // @ts-ignore global.Prism
    ...(global.Prism ? [] : [getPrismURL()]),
    getPrismURL('plugins/line-highlight/prism-line-highlight.min.js'),
    getPrismURL('plugins/line-highlight/prism-line-highlight.min.css'),
    ...languageURLs
  ]
}

/**
 * Loads multiple scripts asynchronously.
 */

export function loadScripts(urls: Array<string>): Promise<void> {
  return Promise.all(urls.map((url: string) => loadScript(url))).then(noop)
}

/**
 * Loads a script asynchronously.
 */

export function loadScript(url: string): Promise<void> {
  return new Promise(resolve => {
    loadjs(url, {
      // @ts-ignore - because @types/loadjs is whack
      before: (path: string, el: HTMLElement) => {
        // Prism wants this so that it doesn't automatically do magic.
        el.setAttribute('data-manual', '')

        // Don't halt HTML processing!
        el.setAttribute('defer', '')
        el.removeAttribute('async')
      },
      success: () => {
        resolve()
      },
      error: (err: Error) => {
        // Probably a 404 or network error or something, no need to panic. It
        // won't cause any trouble, so fail silently.
        debug('loadScript() error:', err)
        resolve()
      }
    })
  })
}

/**
 * Returns the CDN URL for a given language plugin.
 *
 * @example
 *     getLanguageURL('javascript')
 *     // => 'https://cdn.jsdelivr.net/npm/prismjs@1.14.0/components/prism-javascript.min.js'
 */

export function getLanguageURL(lang: string): string {
  return getPrismURL(`components/prism-${lang}.min.js`)
}

/**
 * Returns the CDN URL for a given prism `file`.
 *
 * @example
 *     getPrismURL()
 *     // => 'https://cdn.jsdelivr.net/npm/prismjs@1.14.0/prism.min.js'
 *
 *     getPrismURL('package.json')
 *     // => 'https://cdn.jsdelivr.net/npm/prismjs@1.14.0/package.json'
 */

export function getPrismURL(file: string = 'prism.min.js'): string {
  return `https://cdn.jsdelivr.net/npm/prismjs@${PRISM_VERSION}/${file}`
}

/**
 * Returns languages used in an element.
 * @returns an list of languages as an array of strings.
 *
 * @example
 * Assuming the body has `<pre class='language-jsx'>` (and alike for
 * `javascript` and `ruby`), `getLanguagesInElement()` will return those
 * languages.
 *
 *     getLanguagesInElement(document.body)
 *     // => ['jsx', 'javascript', 'ruby']
 */

export function getLanguagesInElement(el?: HTMLElement): Array<string> {
  // Just being defensive
  if (!el) return []

  const pres = el.querySelectorAll('[class*="language-"]')

  // Get classnames
  let classNames
  classNames = Array.from(pres).map(el =>
    Array.from(el.className.split(' ')).find(
      (cn: string) => !!cn.match(/^language-/)
    )
  )

  // Ensure there aren't any null's
  classNames = classNames.filter(Boolean) as Array<string>

  const result = classNames
    // Only work on the language-* classes
    .map((cn: string) => cn.replace(/^language-/, ''))

    // Resolve to its canonical version (rb => ruby)
    .map((cn: string) => LANGUAGE_ALIASES[cn] || cn)

    // Sort and dedeplicate
    .sort()
    .filter((value, index, self) => self.indexOf(value) === index)

    // Ignore certain ones
    .filter((cn: string) => !LANGUAGE_IGNORE[cn])

  return result
}

/**
 * Function to neutralize a promise's return value.
 *
 * @example
 *     Promise.all(...).then(noop)
 */

function noop() {
  // Return undefined
}
