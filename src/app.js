import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

import data from './data.json'

// TODO: Mobile version

const Wrapper = styled.div`
  padding: 50px;
  text-align: center;
`
Wrapper.displayName = 'Wrapper'

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
Card.displayName = 'Card'

const CardTitle = styled.div`
  text-align: left;
  font-size: 1.3rem;
  padding-bottom: 20px;
`
CardTitle.displayName = 'CardTitle'

// Chrome was adding stupid margin
const Question = styled.p`
  padding: 0;
  margin:0
`
Question.displayName = 'Question'

const QuizContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0 60px;
  padding: 10px 0;
  border-top: 1px solid #eaeaeb;
`

const Answers = styled.div``
Answers.displayName = 'Answers'

const App = () => {
  const quiz = data.map((dat) => dat.quiz)[0]

  return (
    <Wrapper>
      <Card>
        <CardTitle>
          <Question>{quiz.title}</Question>
        </CardTitle>
        <img src={quiz.image} />
        <QuizContent>
          <Answers>
            <ul>
              {quiz.choices.map((choice, index) =>
                <li key={index}>{choice.response}</li>
              )}
            </ul>
          </Answers>
        </QuizContent>
      </Card>
    </Wrapper>
  )
}
export default hot(module)(App)
