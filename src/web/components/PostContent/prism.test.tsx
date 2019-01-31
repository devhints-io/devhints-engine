/* eslint-env jest */

import { getLanguagesInElement, getLanguageURL, getPrismURL } from './prism'

describe('getPrismURL()', () => {
  it('works', () => {
    const output = getPrismURL()
    expect(output).toMatch(/cdn.jsdelivr.net\/npm\/prismjs/)
  })
})

describe('getLanguageURL()', () => {
  it('works', () => {
    const output = getLanguageURL('bash')
    expect(output).toMatch(/cdn\.jsdelivr\.net\/npm\/prismjs/)
    expect(output).toMatch(/prism-bash\.min\.js/)
  })
})

describe('getLanguagesInElement()', () => {
  it('works for nothing', () => {
    const div = document.createElement('div')
    const output = getLanguagesInElement(div)
    expect(output).toEqual([])
  })

  it('works', () => {
    const div = document.createElement('div')
    div.innerHTML = `
      <pre class='language-jsx'>
        <code>hello()</code>
      </pre>
      <pre class='language-ruby'>
        <code>hello()</code>
      </pre>
  `

    const output = getLanguagesInElement(div)
    expect(output).toEqual(['jsx', 'ruby'])
  })

  it('deduplicates aliases', () => {
    const div = document.createElement('div')
    div.innerHTML = `
      <pre class='language-js'>
        <code>hello()</code>
      </pre>
      <pre class='language-javascript'>
        <code>hello()</code>
      </pre>
  `

    const output = getLanguagesInElement(div)
    expect(output).toEqual(['javascript'])
  })

  it('deduplicates', () => {
    const div = document.createElement('div')
    div.innerHTML = `
      <pre class='language-javascript'>
        <code>hello()</code>
      </pre>
      <pre class='language-javascript'>
        <code>hello()</code>
      </pre>
  `

    const output = getLanguagesInElement(div)
    expect(output).toEqual(['javascript'])
  })

  it('supports different classname formats', () => {
    const div = document.createElement('div')
    div.innerHTML = `
      <pre class=' -setup language-jsx'>
        <code>hello()</code>
      </pre>
      <pre class=' language-ruby'>
        <code>hello()</code>
      </pre>
  `

    const output = getLanguagesInElement(div)
    expect(output).toEqual(['jsx', 'ruby'])
  })

  it('support classnames in code', () => {
    const div = document.createElement('div')
    div.innerHTML = `
      <pre>
        <code class=' language-jsx'>hello()</code>
      </pre>
      <pre>
        <code class=' language-ruby'>hello()</code>
      </pre>
  `

    const output = getLanguagesInElement(div)
    expect(output).toEqual(['jsx', 'ruby'])
  })
})
