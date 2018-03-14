import React from 'react'
import RehypeReact from 'rehype-react'

/*
 * We serialize the test markup as React elements, not hast.
 * Just for practicality... Jest has better test output for
 * React elements.
 */

const render = new RehypeReact({
  createElement: React.createElement
}).Compiler

export default render
