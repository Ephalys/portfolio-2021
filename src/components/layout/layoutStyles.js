import { createGlobalStyle } from "styled-components"
import colors from "styles/colors"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    font-family: Inter, Arial, sans-serif;
  }
`
