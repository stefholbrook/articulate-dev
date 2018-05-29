import React from 'react'

import {
  RadioLabel,
  Answer,
  RadioButton
} from './styled/content'

const Content = ({ quiz, handleClick, selectAnswer, submitForm }) => {
  return (
    <ul>
      {quiz.choices.map((choice, index) =>
        <Answer
          submitForm={submitForm}
          key={index}
          isSelected={selectAnswer(index)}>
          <RadioLabel
            submitForm={submitForm}
            htmlFor={`option-${index}`}
            role='radio'>
            <input
              id={`option-${index}`}
              name='answer'
              value={index}
              disabled={submitForm}
              checked={selectAnswer(index)}
              onChange={handleClick}
              type='radio' />
            <RadioButton
              isSelected={selectAnswer(index)}
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
  )
}

export default Content
