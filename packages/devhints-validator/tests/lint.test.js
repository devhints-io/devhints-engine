/* eslint-env jest */
const { parseMatter } = require('../lib')
const { lint } = require('../lib/lint')

it('leaves things alone', () => {
  const doc = {
    path: '/path/to/react.md',
    rawBody: '---\ntitle: React\npath: /react\n---\nHello world!',
    attributes: {
      title: 'React',
      path: '/react'
    },
    body: 'Hello world!'
  }

  const result = lint(doc)

  expect(result.status).toEqual('ok')
  expect(result.document).toEqual(doc)
  expect(result.output).toEqual(doc.rawBody)
})

it('rewrites silly yaml', () => {
  const doc = {
    path: '/path/to/react.md',
    rawBody: '---\ntitle:  React\npath: /react\n---\nHello world!',
    attributes: {
      title: 'React',
      path: '/react'
    },
    body: 'Hello world!'
  }

  const expected = '---\ntitle: React\npath: /react\n---\nHello world!'

  const result = lint(doc)

  expect(result.status).toEqual('fixed')
  expect(result.output).toEqual(expected)
})

it('leaves things alone', () => {
  const doc = {
    path: '/path/to/react.md',
    rawBody: '---\ntitle: React\npath: /react\n---\nHello world!',
    attributes: {
      title: 'React',
      path: '/react'
    },
    body: 'Hello world!'
  }

  const result = lint(doc)

  expect(result.status).toEqual('ok')
  expect(result.document).toEqual(doc)
  expect(result.output).toEqual(doc.rawBody)
})

it('handles errors from parseMatter()', async () => {
  const input = {
    path: '/path/to/react.md',
    rawBody: '---\n:\n---\nHello'
  }

  const doc = await parseMatter(input)
  const result = lint(doc)

  expect(result.status).toEqual('error')
  expect(result.error).toEqual(doc.error)
  expect(result.output).toEqual(doc.rawBody)
})

it('adds a path', () => {
  const doc = {
    path: '/path/to/react.md',
    rawBody: '---\ntitle: React\n---\nHello world!',
    attributes: {
      title: 'React'
    },
    body: 'Hello world!'
  }

  const result = lint(doc)

  expect(result.status).toEqual('fixed')
  expect(result.document.attributes.path).toEqual('/react')
})
