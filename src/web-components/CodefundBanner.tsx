import React, { useEffect } from 'react'
import css from 'styled-jsx/css'

const CodefundBanner = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!(window as any).abp) (window as any).abp = undefined
    }
  }, [])

  useEffect(() => {
    const rand = `${+new Date()}-${(Math.random() * 1000000) | 0}`
    loadJs(`https://app.codefund.io/properties/51/funder.js?t=${rand}`, {
      async: true
    })
    // loadJs(`https://cdn2.codefund.app/assets/px.js?ch=1&t=${rand}`, { async: false })
    // loadJs(`https://cdn2.codefund.app/assets/px.js?ch=2&t=${rand}`, { async: false })
  }, [])

  return (
    <div className='CodefundBox'>
      <div id='codefund'>{/* <!-- fallback content --> */}</div>
      <style jsx>{CSS}</style>
    </div>
  )
}

const CSS = css`
  .CodefundBox {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .CodefundBox > div {
    min-height: 8.1em;
  }
`

const loadJs = (url: string, opts: { async: boolean }) => {
  const tag = document.createElement('script')
  tag.async = opts.async
  tag.src = url
  document.body.appendChild(tag)
}

export default CodefundBanner
