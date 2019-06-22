import { renderToStaticMarkup } from 'react-dom/server'
import React from 'react'
import styled from 'styled-components'

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const sheet = new ServerStyleSheet()
const Center = styled.div`
  display: flex;
  width: 100%;
`
const body = renderToStaticMarkup(
  <StyleSheetManager sheet={sheet.instance}>
  <div>
    <div style={{ display: 'flex' }}>
      <Center>
        <h1 style={{ color: 'red' }}>Hello World From REACT!</h1>
      </Center>
      <img src="https://picsum.photos/200/300" />
    </div>
  </div>
</StyleSheetManager>
)

// sheet.collectStyles(
export const test = `
  <!doctype html>
    <html>
       <head>
        <meta charset="utf-8">
        <title>Sample PDF</title>
        ${sheet.getStyleTags()}
        </head>
        <body>
      ${body}
      </body>
    </html>
`
console.log(test)
// FINALLY
sheet.seal()
