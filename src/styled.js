import styled from 'styled-components'

export const Wrapper = styled.div`
  box-sizing: content-box;
  margin: 0 auto;
  width: 100%;
  padding: 50px 0;
  text-align: center;
  color: #313537;
  font-weight: 100;
`
Wrapper.displayName = 'Wrapper'

export const Card = styled.div`
  display: inline-flex;
  flex-flow: column wrap;
/* TODO: This is weird on desktop...Fix! */
  width: 80%;
  padding: 60px 40px 50px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  box-shadow: 0 0.4rem 1.2rem 0.2rem rgba(0,0,0,.05);

  @media (min-width: 960px) {
    width: 50%;
  }
`
Card.displayName = 'Card'

export const CardContent = styled.div`
  margin-bottom: 15px;
`
CardContent.displayName = 'CardContent'

export const ImageContainer = styled.figure`
  margin: 0;

  & > img {
    width: 100%;
  }
`
ImageContainer.displayName = 'ImageContainer'

export const CardTitle = styled.div`
  text-align: left;
  font-size: 1.3rem;
  padding-bottom: 20px;
`
CardTitle.displayName = 'CardTitle'

// Chrome was adding stupid margin
export const Question = styled.p`
  padding: 0;
  margin:0
`
Question.displayName = 'Question'

export const QuizContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0 60px;
  padding: 10px 0;
  border-top: 1px solid #eaeaeb;
`
QuizContent.displayName = 'QuizContent'

export const Answers = styled.form`
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
