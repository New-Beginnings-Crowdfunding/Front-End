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
`;

export const CardSection = styled.div`
${'' /* border: solid green; */}
display: "flex";
flex-direction: "row";
justify-content: "space-between";
padding: "100px";
`;

export const StudentCardStyle = styled.div`
background-color: ${colorObj.secondary};
color: ${colorObj.light};
height: 90%;
width: 20%;
border-radius: 4%;
`;

export const StoryBanner = styled.div`
background-color: ${colorObj.accent};
height: 10%;
padding: 10%;
`;