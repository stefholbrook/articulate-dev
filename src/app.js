import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 50px;
`

const Card = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 60px 40px 50px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  box-shadow: 0 0.4rem 1.2rem 0.2rem rgba(0,0,0,.05);
`

const App = () => {
  return (
    <Wrapper>
      <Card>
        I don't think I need that
      </Card>
    </Wrapper>
  )
}
export default hot(module)(App)
