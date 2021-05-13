import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const StoryContainer = styled.section`
  padding-bottom: 100px;
  padding-top: 100px;
  background: ${props => props.backgroundColor || 'transparent'};
  
  @media (min-width: ${breakpoints.$screenMinSm}) {
    padding-bottom: 200px;
    padding-top: 200px;
  }

`

export const StoryText = styled.p`
  color: ${props => props.backgroundColor ? props.theme.secondaryParagraph : props.theme.paragraph};
  white-space: pre-wrap;
  
  &:first-of-type {
    margin: 0 0 15px;
  }

  @media (min-width: ${breakpoints.$screenMinXs}) {
    max-width: 80%;
  }

  @media (min-width: ${breakpoints.$screenMinSm}) {
    max-width: 70%;
  }

  @media (min-width: ${breakpoints.$screenMinLg}) {
    max-width: 50%;
  }
`

export const StacksContainer = styled.div`
    margin-top: 30px;
`


export const Stacks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.$screenMinSm}) {
    flex-wrap: nowrap;
  }
`

