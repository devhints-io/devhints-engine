/* @flow */
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
  js: 'javascript',
  tsx: 'jsx',
  rb: 'ruby',
  dockerfile: 'docker',
  vimscript: 'vim',
  dosini: 'ini'
}

/**
 * Loads prism asynchronously.
 * @returns a Promise that resolves into the Prism instance.
 *
 * @example
 *     const Prism = await loadPrism()
 */

export function loadPrism (): Promise<any> {
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
      // TODO infer languages automatically
      debug('loading languages...')
      return loadLanguages(['jsx', 'bash', 'ruby', 'vim'])
    })
    .then(() => {
      debug('done!!!')
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
 * Loads a language. Returns a promise that resolves to nothing.
 * See supported languages at: https://cdn.jsdelivr.net/npm/prismjs/components/
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
 * Loads a script asynchronously
 */

export function loadScript (url: string): Promise<void> {
  const log = debugjs('app:PostContent.prism/loadScript()')

  return new Promise((resolve, reject) => {
    log('loading')
    loadjs(url, {
      before: (path, el) => {
        // Prism wants this
        el.setAttribute('data-manual', true)
      },
      success: () => {
        log('success')
        resolve()
      },
      error: reject
    })
  })
}

/**
 * Loads many languages. Returns a promise.
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
 * Function to neutralize a promise's return value.
 *
 * @example
 *     Promise.all(...).then(noop)
 */

function noop () {
  // Return undefined
}
