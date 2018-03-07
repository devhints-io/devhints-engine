import React from 'react'

let stylesStr

if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render () {
    let css

    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    const {
      body,
      bodyAttributes,
      headComponents,
      htmlAttributes,
      postBodyComponents,
      preBodyComponents
    } = this.props

    return (
     <html {...htmlAttributes}>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          {headComponents}
          {css}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div key='body' id='___gatsby' dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    )
  }
}
