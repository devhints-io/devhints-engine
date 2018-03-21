import React from 'react'

/**
 * Comments area
 */

export default () => (
  <section className='comments-area' id='comments' data-js-no-preview>
    <div className='container'>
      <details className='comments-details'>
        <summary>
          <strong className='count'>0</strong>
          <span className='suffix'>comments for this cheatsheet.</span>
          <span className='fauxlink'>Write yours!</span>
        </summary>
        <div className='comments-section'>
          <div className='comments'>
            (Disqus goes here)
          </div>
        </div>
      </details>
    </div>
  </section>
)