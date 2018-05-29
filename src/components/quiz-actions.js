import React from 'react'

import { SubmitQuiz } from './styled/quiz-actions'

const QuizActions = ({ handleSubmit, isSelected, resetForm, submitForm }) => {
  return (
    <SubmitQuiz isSelected={isSelected}>
      {!submitForm
        ? (
          <button type='submit' onClick={handleSubmit(!isSelected)}>
            Submit
          </button>
        )
        : (
          <div
            onClick={resetForm}
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
  )
}

export default QuizActions
