import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

////////////////////////////
//     PRIMARY COLORS    //
////////////////////////////
export const colorObj = {
  light: "#F6F6F6",
  accent: "#D15F45",
  primary: "#119DA4",
  secondary: "#114355",
  dark: "#0E252D",
};

export const ButtonStyled = styled.button`
  background-color: ${colorObj.primary};
  border-radius: 10px;
  padding: 1%;
  color: ${colorObj.light};
  box-shadow: 2px 0.1px 4px 0.2px ${colorObj.secondary};
`;

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
