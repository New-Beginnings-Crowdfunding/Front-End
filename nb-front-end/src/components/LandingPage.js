import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import StudentCard from './StudentCard';
import {TopSection, Centered, CardSection, StoryBanner} from "../styles/LandingPageStyle";

function LandingPage() {
    return (
        <div className="landing">
            <TopSection>
                <Header />
                <Centered>
                    <h1>Discover the future of business and technology</h1>
                </Centered>
            </TopSection>
            <h1 style={{ color: "black" }}>Top Beginnings</h1>
            <div /* I tried to turn this into a styled component "CardSection" but for some reason it wouldn't work. */
                style={{
                height: "800px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "100px",
                }}
            >
                <StudentCard />
                <StudentCard />
                <StudentCard />
            </div>
            <StoryBanner>
                <h2>Stories of New Beginnings</h2>
                <h1>Meet Nicholas</h1>
                <p>Blah blah blah</p>
            </StoryBanner>
            <div style={{ height: "200px" }}></div>
            <Footer />
            </div>
    );
}

export default LandingPage;
