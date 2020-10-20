import styled from "styled-components";
import { colorObj } from "./GlobalStyle";
import mainImg from "../assets/landingHeroImage.png";

export const TopSection = styled.div`
    background-image: url(${mainImg});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-bottom: 15%;
    text-shadow: 2px 2px 4px #000000;
`;

export const CardSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 5%;
padding-top: 0;
@media (max-width: 700px) {
    flex-direction: column;
  } */}
`;

export const StudentCardStyle = styled.div`
background-color: ${colorObj.primary};
background-image: linear-gradient(rgba(255,0,0,0), ${colorObj.secondary});
color: ${colorObj.light};
width: 300px;
border-radius: 2%;
box-shadow: 7px 7px 1px ${colorObj.dark};

`;

export const StoryBanner = styled.div`
background-color: ${colorObj.accent};
height: 10%;
padding: 10%;
`;