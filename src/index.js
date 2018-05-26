// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from './app'

injectGlobal`
  margin: 0 auto;
  width: 100px;
`

render(
  <App />,
  document.getElementById('root')
)
