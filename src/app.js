import React, { Component } from 'react'
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

const Answers = styled.div`
  width: 100%;

  & > ul {
    list-style: none;
    text-align: left;
    font-family: Lato, sans-serif;
    color: #313537;
    padding: 0;
  }
`
Answers.displayName = 'Answers'

const RadioLabel = styled.label`
  display: flex;
  flex: 0 1 100%;
  padding: 30px 20px;
  cursor: pointer;

  & > input {
    display: none;
  }
`

const Answer = styled.li`
  width: 100%;

  &:hover {
    background-color: #f7f7f8;
  }
`
Answer.displayName = 'Answer'

const RadioButton = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  border: 1px solid #707070;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color .3s;

  &:after {
    display: flex;
    align-items: center;
    transform: scale(.6);
    transition: opacity .3s,transform .3s;
    content: '';
    position: absolute;
    top: 20%;
    left: 19%;
    display: block;
    width: .6rem;
    height: .6rem;
    background: rgba(49,53,55,.8);
    border-radius: 50%;
    ${({ isSelected }) => isSelected ? 'opacity: 1' : 'opacity: 0'};
  }
`

class App extends Component {
  state = {
    selected: null
  }

  render () {
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
                {quiz.choices.map((choice, index) => {
                  // I'm not sure why the integer is being transformed to a string ¯\_(ツ)_/¯
                  const selectedToNum = parseInt(this.state.selected, 10)

                  return (
                    <Answer
                    key={index}
                    onChange={(event) => this.handleClick(event)}>
                    <RadioLabel
                      htmlFor={`option-${index}`}
                      role='radio'>
                      <input
                        id={`option-${index}`}
                        name={choice.response}
                        value={index}
                        checked={index === selectedToNum}
                        type='radio' />
                      <RadioButton isSelected={index === selectedToNum}>
                        <span>
                          <i
                            style={{ fontSize: '1em', color: '#747a7e' }}
                            className='material-icons'>
                            {/* check */}
                            {/* clear #313537  */}
                          </i>
                        </span>
                      </RadioButton>
                      <div style={{ marginLeft: '20px' }}>
                        {choice.response}
                      </div>
                    </RadioLabel>
                  </Answer>
                )}
                )}
              </ul>
            </Answers>
          </QuizContent>
        </Card>
      </Wrapper>
    )
  }

  handleClick = (event) => this.setState({ selected: event.target.value })
}

export default hot(module)(App)
