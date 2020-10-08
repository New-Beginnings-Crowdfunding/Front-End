import React from "react";
import { FooterStyle } from "../styles/FooterStyle";
import logoImg from "../assets/MainLogo_Darkmode.png";

function Footer() {
  return (
    <FooterStyle>
      <img src={logoImg} alt="" style={{ height: "80px" }}></img>
      <div>
        <p>About</p>
        <br />
        <p>Login</p>
      </div>
      <h1>Social Links</h1>
    </FooterStyle>
  );
}

export default Footer;
