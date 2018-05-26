import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px;
  text-align: center;
`

const Card = styled.div`
  display: inline-flex;
  flex-flow: column wrap;
/* TODO: This is weird on desktop...Fix! */
  width: 83%;
  padding: 60px 40px 50px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  box-shadow: 0 0.4rem 1.2rem 0.2rem rgba(0,0,0,.05);
`
const CardTitle = styled.div`
  text-align: left;
  font-size: 1.3rem;
  padding-bottom: 20px;
`

// Chrome was adding stupid margin
const Question = styled.p`
  padding: 0;
  margin:0
`

const QuizContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0 60px;
  padding: 10px 0;
  border-top: 1px solid #eaeaeb;
`

const Answers = styled.div``

const App = () => {
  return (
    <Wrapper>
      <Card>
        <CardTitle>
          <Question>What is this a picture of?</Question>
        </CardTitle>
        <img src='https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/d229V-nstxA6tZdi.gif' />
        <QuizContent>
          <Answers>
            <ul>
              <li>this and like that</li>
              <li>and like this and a ugh</li>
            </ul>
          </Answers>
        </QuizContent>
      </Card>
    </Wrapper>
  )
}
export default hot(module)(App)
