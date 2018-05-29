import styled from 'styled-components'

export const SubmitQuiz = styled.div`
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
