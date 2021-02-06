import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const SingleImageContainer = styled.h2`
  margin: 0 auto;
  
  @media (min-width: ${breakpoints.$screenMinSm}) {
    max-width: 940px;
  }
  
  img {
    width: 100%;
  }
`
