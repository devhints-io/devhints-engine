import React, { useEffect } from 'react'
import CSS from './CodefundBanner.module.css'

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
    <div className={CSS.root}>
      <div id='codefund' className={CSS.inner}>
        {/* <!-- fallback content --> */}
      </div>
    </div>
  )
}

const loadJs = (url: string, opts: { async: boolean }) => {
  const tag = document.createElement('script')
  tag.async = opts.async
  tag.src = url
  document.body.appendChild(tag)
}

export default CodefundBanner
