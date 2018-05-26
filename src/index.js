import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from './app'

injectGlobal`
  font-size: 100%;
  font-family: Merriweather serif;
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;
`

render(
  <App />,
  document.getElementById('root')
)
