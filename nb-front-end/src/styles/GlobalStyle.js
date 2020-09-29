import { createGlobalStyle } from "styled-components";

////////////////////////////
//     PRIMARY COLORS    //
////////////////////////////
export const colorObj = {
  light: "#FAF9F9",
  mid: "#89B0AE",
  dark: "#555B6E",
};

const GlobalStyle = createGlobalStyle`

html, body, #root, #app{
  height: 100%;
} 
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;
export default GlobalStyle;
