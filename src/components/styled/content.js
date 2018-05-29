import styled from 'styled-components'

export const RadioLabel = styled.label`
  display: flex;
  flex: 0 1 100%;
  padding: 30px 20px;
  cursor: ${({ submitForm }) => submitForm ? 'default' : 'pointer'};

  & > input {
    display: none;
  }
`
RadioLabel.displayName = 'RadioLabel'

export const Answer = styled.li`
  width: 100%;
  transition: ${({ isSelected, submitForm }) =>
    (isSelected && submitForm) && 'border .3s .20s,right 0ms .72s;'};
  border: ${({ isSelected, submitForm }) =>
    (isSelected && submitForm) && '2px solid #747a7e'};

  ${({ submitForm }) => !submitForm && `
    &:hover {
      background-color: #f7f7f8;
    }
  `}
`
Answer.displayName = 'Answer'

export const RadioButton = styled.div`
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
    display: block;
    align-items: center;
    position: absolute;
    transform: scale(.6);
    transition: opacity .3s,transform .3s;
    content: '';
    position: relative;
    top: 20%;
    left: 20%;
    width: .6rem;
    height: .6rem;
    background: rgba(49,53,55,.8);
    border-radius: 50%;
    opacity: ${({ isSelected, submitForm }) =>
      !isSelected || submitForm ? '0' : '1'
    };
  }

  @media(min-width: 960px) {
    &:after {
      top: 15%;
    }
  }
`
RadioButton.displayName = 'RadioButton'
