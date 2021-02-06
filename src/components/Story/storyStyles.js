import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const StoryContainer = styled.section`
`

export const StoryTitle = styled.h2`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
`

export const StoryText = styled.p`
  color: ${({ theme }) => theme.paragraphs};
  
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
