import styled from 'styled-components'

export const FeedbackSection = styled.div`
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
FeedbackSection.displayName = 'FeedbackSection'

export const Feedback = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;
`
Feedback.displayName = 'Feedback'

export const Icon = styled.div`
  width: 55px;
  height: 55px;
  font-family: Lato, sans-serif;
  border: 2px solid #cacbcb;
  border-radius: 50%;
`
Icon.displayName = 'Icon'

export const Message = styled.div`
  color: #707070;
`
Message.displayName = 'Message'
