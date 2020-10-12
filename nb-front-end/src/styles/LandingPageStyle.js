import styled from "styled-components";
import { colorObj } from "./GlobalStyle";


export const TopSection = styled.div`
    ${'' /* display: flex; */}
    ${'' /* flex-direction: column; */}
    width: 100%;
    height: 100vh;
    border: solid orange;
    background-image: url("../assets/landingHeroImage.png");
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: solid yellow;
`;

export const CardSection = styled.div`
height: 800px;
border: solid green;
display: "flex";
flex-direction: "row";
justify-content: "space-between";
padding: "100px";
`;