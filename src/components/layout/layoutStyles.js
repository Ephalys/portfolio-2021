import { createGlobalStyle } from "styled-components"
import colors from "styles/colors"
import breakpoints from "styles/breakpoints"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    font-family: Inter, Arial, sans-serif;
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  .container {
    padding-left: 30px;
    padding-right: 30px;

    @media (min-width: ${breakpoints.$screenMinSm}) {
      padding-right: 120px;
      padding-left: 180px;
    }
  }
`
