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
            <h1 style={{ color: "black", padding: "2%" }}>Top Beginnings</h1>
            <CardSection>
                <StudentCard />
                <StudentCard />
                <StudentCard />
            </CardSection>
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
