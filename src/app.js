import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

import data from './data.json'

// TODO: Mobile version

const Wrapper = styled.div`
  padding: 50px;
  text-align: center;
  color: #313537;
  font-weight: 100;
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

const CardContent = styled.div`
  margin-bottom: 15px;
`
CardContent.displayName = 'CardContent'

const ImageContainer = styled.figure`
  margin: 0;

  & > img {
    width: 100%;
  }
`

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

const Answers = styled.form`
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
  cursor: ${({ submitForm }) => submitForm ? 'default' : 'pointer'};

  & > input {
    display: none;
  }
`
RadioLabel.displayName = 'RadioLabel'

const Answer = styled.li`
  width: 100%;

  ${({ submitForm }) => !submitForm && `
    &:hover {
      background-color: #f7f7f8;
    }
  `
}

  transition: ${({ isSelected, submitForm }) =>
    (isSelected && submitForm) && 'border .3s .20s,right 0ms .72s;'};
  border: ${({ isSelected, submitForm }) =>
    (isSelected && submitForm) && '2px solid #747a7e'};
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
    width: .6rem;
    height: .6rem;
    background: rgba(49,53,55,.8);
    border-radius: 50%;
    opacity: ${({ isSelected, submitForm }) =>
      !isSelected || submitForm ? '0' : '1'
    };
  }
`
RadioButton.displayName = 'RadioButton'

const SubmitQuiz = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  margin: 20px 0;
  color: #707070;

  & > button {
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    min-width: 100px;
    max-width: 170px;
    height: 40px;
    cursor: ${({ isSelected }) => isSelected ? 'pointer' : 'default'};
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: Lato, sans-serif;
    font-size: 12px;
    line-height: 34px;
    opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    color: #fff;
    border: 2px solid transparent;
    box-sizing: border-box;
    background-color: ${({ isSelected }) => isSelected ? '#747a7e' : 'silver'};
    border-radius: 2em;
    transition: background .3s,color .3s,opacity .3s;
  }

  & > button:hover {
    background-color: silver;
  }

  & > button:focus {
    outline:0;
  }
`
SubmitQuiz.displayName = 'SubmitQuiz'

const FeedbackSection = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  overflow: hidden;
  height: ${({ isOpen }) => isOpen ? 150 : 0}px;
  transition: ${({ isOpen }) => isOpen
    ? 'height .6s, opacity .6s .6s,transform .6s .6s, transform .6s .6s'
    : 'height .6s, opacity .8ms 6ms,transform .6s .6s, transform .6s .6s'
  };
`

const Feedback = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;
`

const Icon = styled.div`
  width: 55px;
  height: 55px;
  font-family: Lato, sans-serif;
  border: 2px solid #cacbcb;
  border-radius: 50%;
`

const Message = styled.div`
  color: #707070;
`

class App extends Component {
  state = {
    select: null,
    submitForm: false,
    isOpen: false
  }

  handleClick = () => this.setState({ select: this.list.answer.value })

  handleSubmit = (disabled) => (event) => {
    event.preventDefault()

    if (disabled) return null

    this.setState(({ isOpen }) => ({ submitForm: true, isOpen: !isOpen }))
  }

  selectAnswer = (index) => {
    // I'm not sure why the integer is being transformed to a string ¯\_(ツ)_/¯
    const selectedToNum = parseInt(this.state.select, 10)

    return index === selectedToNum
  }

  isCorrectAnswer = (data) => {
    const selectedToNum = parseInt(this.state.select, 10)
    const correctChoice = data
      .map((dat) => dat.quiz)[0].choices
      .find((choice) => choice.correct === true)

    return correctChoice.id === selectedToNum
  }

  resetForm = () =>
    this.setState(() => ({ select: null, submitForm: false, isOpen: false }))


  render () {
    const { feedbackHeight, isOpen, select, submitForm } = this.state
    const quiz = data.map((dat) => dat.quiz)[0]
    const answer = this.list ? this.list.answer.value : ''
    const isSelected = answer && answer === select

    return (
      <Wrapper>
        <Card>
          <CardContent>
            <CardTitle>
              <Question>{quiz.title}</Question>
            </CardTitle>
            <ImageContainer>
              <img src={quiz.image} />
            </ImageContainer>
            <QuizContent>
              <Answers innerRef={(el) => { this.list = el }}>
                <ul>
                  {quiz.choices.map((choice, index) =>
                    <Answer
                      submitForm={submitForm}
                      key={index}
                      isSelected={this.selectAnswer(index)}>
                      <RadioLabel
                        submitForm={submitForm}
                        htmlFor={`option-${index}`}
                        role='radio'>
                        <input
                          id={`option-${index}`}
                          name='answer'
                          value={index}
                          disabled={submitForm}
                          checked={this.selectAnswer(index)}
                          onChange={this.handleClick}
                          type='radio' />
                        <RadioButton
                          isSelected={this.selectAnswer(index)}
                          submitForm={submitForm}>
                          <span>
                            {submitForm && (
                              <i
                                style={{
                                  fontSize: '1em',
                                  color: choice.correct ? '#747a7e' : '#313537'
                                }}
                                className='material-icons'>
                                {choice.correct ? 'check' : 'clear'}
                              </i>
                            )}
                          </span>
                        </RadioButton>
                        <div style={{ marginLeft: '20px' }}>
                          {choice.response}
                        </div>
                      </RadioLabel>
                    </Answer>
                  )}
                </ul>
              </Answers>
            </QuizContent>
            <FeedbackSection isOpen={isOpen}>
              <Feedback>
                <Icon>
                  <i
                    style={{
                      padding: '10px 12px',
                      fontSize: '2rem',
                      color: '#747a7e'
                    }}
                    className='material-icons'>
                    {this.isCorrectAnswer(data) ? 'check' : 'clear'}
                  </i>
                </Icon>
                <small>
                  {this.isCorrectAnswer(data) ? 'Correct' : 'Incorrect'}
                </small>
              </Feedback>
              <Message>
                <p>I just love cookies and warm coffee!</p>
              </Message>
            </FeedbackSection>
            <SubmitQuiz isSelected={isSelected}>
              {!submitForm
                ? (
                  <button type='submit' onClick={this.handleSubmit(!isSelected)}>
                    Submit
                  </button>
                )
                : (
                  <div
                    onClick={this.resetForm}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}>
                    <i
                      style={{ transform: 'rotate(210deg)' }}
                      className='material-icons'>
                      replay
                    </i>
                    Take Again
                  </div>
                )
              }
            </SubmitQuiz>
          </CardContent>
        </Card>
      </Wrapper>
    )
  }
}

export default hot(module)(App)
