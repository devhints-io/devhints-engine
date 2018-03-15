/* eslint-env jest */
const { parseMatter } = require('../../index')

it('works', async () => {
  const doc = {
    path: '/path/to/react.md',
    rawBody: '---\ntitle: React\npath: /react\n---\nHello world!'
  }

  const newDoc = await parseMatter(doc)

  expect(newDoc.path).toEqual(doc.path)
  expect(newDoc.rawBody).toEqual(doc.rawBody)
  expect(newDoc.attributes).toEqual({
    title: 'React',
    path: '/react'
  })
  expect(newDoc.body).toEqual('Hello world!')
})

it('handles not having any attributes', async () => {
  const doc = {
    path: '/path/to/react.md',
    rawBody: 'Hello'
  }

  const newDoc = await parseMatter(doc)

  expect(newDoc.path).toEqual(doc.path)
  expect(newDoc.rawBody).toEqual(doc.rawBody)
  expect(newDoc.attributes).toEqual({})
  expect(newDoc.body).toEqual('Hello')
})

it('handles errors', async () => {
  const input = {
    path: '/path/to/react.md',
    rawBody: '---\n:\n---\nHello'
  }

  const doc = await parseMatter(input)

  expect(doc.path).toEqual(input.path)
  expect(doc.rawBody).toEqual(input.rawBody)

  expect(doc.error.message)
    .toMatch(/incomplete explicit mapping pair/)
})
