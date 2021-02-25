import { createGlobalStyle } from "styled-components"
import breakpoints from "styles/breakpoints"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Inter, Arial, sans-serif;
    margin: 0;
    transition: all .8s;
    font-size: 16px;
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }
  
  p{
    color: ${({ theme }) => theme.paragraphs};
    margin: 0;
  }
  
  a {
    text-decoration: none;
    transition: all .4s;
    &:hover {
      transition: all .4s;
    }
  }
  
  .container {
    padding-left: 30px;
    padding-right: 30px;
    max-width: 1280px;
    margin: 0 auto;

    @media (min-width: ${breakpoints.$screenMinSm}) {
      padding-right: 120px;
      padding-left: 180px;
    }
  }
`
