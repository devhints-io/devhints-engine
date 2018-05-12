/* eslint-env jest */

import { getRelatedPages } from '../page'

it('works', () => {
  const allSitePage = {}
  const context = {}

  const output = getRelatedPages({ allSitePage, context })
  console.log(output)
})
