import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import axios from 'axios'

import data from '../public/data.json'

import Content from './components/content'
import QuizFeedback from './components/quiz-feedback'
import QuizActions from './components/quiz-actions'

import {
  Wrapper,
  Card,
  CardContent,
  ImageContainer,
  CardTitle,
  Question,
  QuizContent,
  Answers
} from './styled-app'

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
                <Content
                  quiz={quiz}
                  handleClick={this.handleClick}
                  selectAnswer={this.selectAnswer}
                  submitForm={submitForm}
                />
              </Answers>
            </QuizContent>
            <QuizFeedback
              data={data}
              isCorrectAnswer={this.isCorrectAnswer}
              isOpen={isOpen}
            />
            <QuizActions
              handleSubmit={this.handleSubmit}
              isSelected={isSelected}
              resetForm={this.resetForm}
              submitForm={submitForm}
            />
          </CardContent>
        </Card>
      </Wrapper>
    )
  }

  componentDidMount () {
    window.fetch('http://localhost:3000/api/knowledge_check')
      .then((response) => {
        if (response.ok) return response.json()
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err))

    // axios
    //   .get('http://localhost:3000/api/knowledge_check')
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err))
  }
}

export default hot(module)(App)
