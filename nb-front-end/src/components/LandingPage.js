import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import mainImg from "../assets/landingHeroImage.png";
import styled from "styled-components";
import {TopSection, Centered, CardSection} from "../styles/LandingPageStyle";

function App() {
    return (
        <div className="landing">
            <TopSection>
            <Header />
            <Centered>
                <h1>Discover the future of business and technology</h1>
            </Centered>
            </TopSection>
            <CardSection>
            <h1 style={{ color: "black" }}>Top Beginnings</h1>
            <div
                style={{
                height: "500px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "100px",
                }}
            >
                <p style={{ border: "solid red", width: "300px" }}>Card</p>
                <p style={{ border: "solid red", width: "300px" }}>Card</p>
                <p style={{ border: "solid red", width: "300px" }}>Card</p>
            </div>
            </CardSection>
            <div style={{ height: "300px", border: "solid blue" }}>
                <h2>Meet Nicholas</h2>
                <p>Blah blah blah</p>
            </div>
            <div style={{ height: "200px" }}></div>
            <Footer />
            </div>
    );
}

export default App;
