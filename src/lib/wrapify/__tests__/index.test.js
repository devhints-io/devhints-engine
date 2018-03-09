/* eslint-env jest */
import wrapify from '../index'

it('simple usage', run(`
  <div>
    <h2>simple usage<h2>

    <h3>install</h3>
    <p>(install)</p>

    <h3>usage</h3>
    <p>(usage)</p>
  </div>
`, div => {
  expect(div.querySelectorAll('.h2-section .h3-section-list .h3-section').length).toEqual(2)
}))

it('h3 with class', run(`
  <div>
    <h3 class='-hello'>install</h3>
    <p>(install)</p>
  </div>
`, div => {
  expect(div.querySelectorAll('div.h3-section.-hello').length).toEqual(1)
  expect(div.querySelectorAll('div.h3-section-list.-hello').length).toEqual(1)
}))

it('multiple h2s', run(`
  <div>
    <h2>multiple h2<h2>

    <h3>install</h3>
    <p>(install)</p>

    <h3>usage</h3>
    <p>(usage)</p>

    <h2>getting started<h2>

    <h3>first</h3>
    <p>(first)</p>

    <h3>second</h3>
    <p>(second)</p>
  </div>
`))

function run (input, fn) {
  return function () {
    const el = document.createElement('div')
    el.innerHTML = input

    const div = el.children[0]
    wrapify(div)
    expect(div).toMatchSnapshot()

    if (fn) fn(div)
  }
}

it('h2 + pre', run(`
  <div>
    <h2>heading</h2>
    <pre class='language-markdown'>(code)</pre>
  </div>
`))
