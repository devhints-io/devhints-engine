/* @flow */
/* global HTMLElement */

import loadjs from 'loadjs'
import debugjs from 'debug'

const debug = debugjs('app:PostContent.prism')

/**
 * Version of Prism.js to load from CDN
 */

export const PRISM_VERSION = '1.14.0'

/**
 * Map of language codes to prism plugin names.
 * See: https://cdn.jsdelivr.net/npm/prismjs/components/
 */

export const LANGUAGE_ALIASES = {
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
 * Asynchrolously loads Prism, the syntax highlighter.
 * If `el` is given, it tries to infer all the languages used in code blocks
 * inside that element.
 *
 * @returns a Promise that resolves into the `Prism` instance.
 *
 * @example
 *     const Prism = await loadPrism()
 */

export function loadPrism (el?: HTMLElement): Promise<any> {
  const debug = debugjs('app:PostContent.prism/loadPrism()')

  return Promise.resolve()
    .then(() => {
      // Load Prism core
      if (window.Prism) return
      debug('loading prism core...')
      return loadScript(getPrismURL())
    })
    .then(() => {
      debug('loading prism plugins...')
      return loadPrismPlugins()
    })
    .then(() => {
      if (el) {
        const languages = getLanguagesInElement(el)
        debug('loading languages...', languages)
        return loadLanguages(languages)
      }
    })
    .then(() => {
      debug('done!')
      return window.Prism
    })
}

/**
 * Loads a whole slew of default prism plugins.
 */

export function loadPrismPlugins (): Promise<void> {
  const urls = [
    'plugins/line-highlight/prism-line-highlight.min.js',
    'plugins/line-highlight/prism-line-highlight.min.css'
  ]

  return Promise.all(
    urls.map((path: string) => loadScript(getPrismURL(path)))
  ).then(noop)
}

/**
 * Asynchronously loads support for a given `language` for Prism.
 * See supported languages at: https://cdn.jsdelivr.net/npm/prismjs/components/
 *
 * @returns a promise that resolves to nothing.
 *
 * @example
 *     await loadLanguage('javascript')
 */

export function loadLanguage (lang: string): Promise<void> {
  lang = LANGUAGE_ALIASES[lang] || lang

  // Idempotency: don't bother if it's been loaded already
  if (window.Prism && window.Prism.languages && window.Prism.languages[lang]) {
    debug(`loadLanguage(${lang}): already loaded`)
    return Promise.resolve()
  }

  // Load asynchronously using `loadjs`
  const url = getLanguageURL(lang)
  return loadScript(url)
}

/**
 * Loads a script asynchronously.
 */

export function loadScript (url: string): Promise<void> {
  const log = debugjs('app:PostContent.prism/loadScript()')

  return new Promise((resolve, reject) => {
    log('loading')
    loadjs(url, {
      before: (path, el) => {
        // Prism wants this so that it doesn't automatically do magic.
        el.setAttribute('data-manual', true)
      },
      success: () => {
        log('success')
        resolve()
      },
      error: err => {
        // Probably a 404 or network error or something, no need to panic. It
        // won't cause any trouble, so fail silently.
        log('error:', err)
        resolve()
      }
    })
  })
}

/**
 * Asynchronously loads many languages.
 * Compare with `loadLanguage()`, which only loads one language.
 *
 * @returns a promise that resolves to nothing when all languages are loaded.
 *
 * @example
 *     await loadLanguages(['jsx', 'bash'])
 */

export function loadLanguages (langs: Array<string>): Promise<void> {
  return Promise.all(langs.map(loadLanguage)).then(noop)
}

/**
 * Returns the CDN URL for a given language plugin.
 *
 * @example
 *     getLanguageURL('javascript')
 *     // => 'https://cdn.jsdelivr.net/npm/prismjs@1.14.0/components/prism-javascript.min.js'
 */

export function getLanguageURL (lang: string): string {
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

export function getPrismURL (file: string = 'prism.min.js'): string {
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

export function getLanguagesInElement (el: HTMLElement): Array<string> {
  const pres = el.querySelectorAll('[class*="language-"]')

  const classNames = Array.from(pres)
    // Get classnames
    .map((el: HTMLElement) =>
      Array.from(el.className.split(' ')).find((cn: string) =>
        cn.match(/^language-/)
      )
    )

    // Ensure there aren't any null's
    .filter(Boolean)

    // Only work on the language-* classes
    .map((cn: string) => cn.replace(/^language-/, ''))

    // Resolve to its canonical version (rb => ruby)
    .map((cn: string) => LANGUAGE_ALIASES[cn] || cn)

    // Sort and dedeplicate
    .sort()
    .filter((value, index, self) => self.indexOf(value) === index)

    // Ignore certain ones
    .filter((cn: string) => cn !== 'nohighlight')

  return classNames
}

/**
 * Function to neutralize a promise's return value.
 *
 * @example
 *     Promise.all(...).then(noop)
 */

function noop () {
  // Return undefined
}
