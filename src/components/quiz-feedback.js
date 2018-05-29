import React from 'react'

import {
  FeedbackSection,
  Feedback,
  Icon,
  Message
} from './styled/quiz-feedback'

const QuizFeedback = ({ data, isCorrectAnswer, isOpen }) => {
  return (
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
            {isCorrectAnswer(data) ? 'check' : 'clear'}
          </i>
        </Icon>
        <small>
          {isCorrectAnswer(data) ? 'Correct' : 'Incorrect'}
        </small>
      </Feedback>
      <Message>
        <p>I just love cookies and warm coffee!</p>
      </Message>
    </FeedbackSection>
  )
}

export default QuizFeedback
