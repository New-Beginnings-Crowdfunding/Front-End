import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import mainImg from "./assets/promo4.jpg";
import { BackgroundImg, colorObj } from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <BackgroundImg src={mainImg} alt="" />
      <Header />
      <div style={{ height: "1200px" }}></div>
      <h1>Top Beginnings</h1>
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
