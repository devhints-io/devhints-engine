/**
 * Lays out each h3-section using Isotope.
 */

export default function isotopify(el: HTMLElement | null | void) {
  if (!el || !el.children) return

  // If we're running on the server, don't bother with this
  if (typeof window === 'undefined') return

  // There's a wrapping <div> from renderAst, meh
  const div = el.children[0]
  if (!div) return

  // isotope()'ify all lists
  const lists = div.querySelectorAll<HTMLElement>('.h3-section-list')
  Array.from(lists).forEach(isotopifyItem)
}

/**
 * Applies an Isotope layout to the given HTML element `el`'s H3 sections.
 */

function isotopifyItem(el: HTMLElement) {
  // Load this lazily, so that it doesn't happen on the server
  const Isotope = require('isotope-layout/dist/isotope.pkgd.js')

  const iso = new Isotope(el, {
    itemSelector: '.h3-section',
    transitionDuration: 0
  })

  const images = el.querySelectorAll('img')

  Array.from(images).forEach(image => {
    image.addEventListener('load', () => {
      iso.layout()
    })
  })

  // Insurance against weirdness on pages like devhints.io/vim, where the
  // critical path CSS may look different from the final CSS (because of the
  // tables).
  window.addEventListener('load', () => {
    iso.layout()
  })
}
