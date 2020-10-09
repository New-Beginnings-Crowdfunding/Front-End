import styled from "styled-components";
import { colorObj } from "./GlobalStyle";

////////////////////////////
//      FOOTER STYLE      //
////////////////////////////

export const FooterStyle = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1% 2%;
  height: 20%;
  background-color: ${colorObj.dark};
  color: ${colorObj.light};
`;
