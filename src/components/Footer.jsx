import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

import logo from "../assets/images/logo.png";

const Footer = () => {
  const containerStyle = {
    display: "flex",
    position: "relative",
    zIndex: 1,
    flexDirection: "column",
    // backgroundColor: "#00a86b",
    color: "white",
    fontFamily: "Arial, sans-serif",
    marginTop: "150px",
  };

  const topSectionStyle = {
    display: "flex",
    position: "absolute",
    top: "-150px",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    gap: "30px",
    padding: "20px",
    width: "100%",
  };

  const infoBoxStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    color: "grey",
    width: "22%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const mainSectionStyle = {
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    // padding: "40px",
    backgroundColor: "#2D3685",
    // paddingTop: "100px",
    // gap: "80px",
    width: "95%",
    margin: "0 auto",
  };

  const columnStyle = {
    paddingTop: "100px",
    height: "100%",
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    color: "white",
    textDecoration: "none",
  };

  const inputStyle = {
    padding: "10px",
    width: "70%",
    border: "none",
    borderRadius: "4px 0 0 4px",
  };

  const buttonStyle = {
    padding: "10px",
    paddingRight: "20px",
    paddingLeft: "20px",
    backgroundColor: "#2D3685",
    color: "white",
    border: "none",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
  };

  const socialIconStyle = {
    marginRight: "10px",
    cursor: "pointer",
  };

  return (
    <footer style={containerStyle}>
      <div style={topSectionStyle}>
        <div style={infoBoxStyle}>
          <MapPin size={70} style={{ marginRight: "10px", color: "#EE2424" }} />
          <div>
            <h3 style={{ ...headingStyle }}>
              <span style={{ color: "#2E4E53" }}>Our Location</span>
            </h3>
            <p style={{ fontSize: "14px" }}>
              401 S Dupont Hwy LOT B, New Castle, DE 19720, United States
            </p>
          </div>
        </div>
        <div style={infoBoxStyle}>
          <Phone size={70} style={{ marginRight: "10px", color: "#EE2424" }} />
          <div>
            <h3 style={{ ...headingStyle, color: "#00a86b" }}>
              <span style={{ color: "#2E4E53" }}>Call Us</span>
            </h3>
            <p style={{ fontSize: "14px" }}>(+13) 025 446 246</p>
          </div>
        </div>
        <div style={infoBoxStyle}>
          <Mail size={70} style={{ marginRight: "10px", color: "#EE2424" }} />
          <div>
            <h3 style={{ ...headingStyle, color: "#00a86b" }}>
              <span style={{ color: "#2E4E53" }}>Email Us</span>
            </h3>
            <p style={{ fontSize: "14px" }}>help@serenitet.com</p>
            <p style={{ fontSize: "14px" }}>support@serenite.com</p>
          </div>
        </div>
      </div>
      <div style={mainSectionStyle}>
        <div
          style={{
            ...columnStyle,
            backgroundColor: "#EE2424",
            width: "30%",
            paddingLeft: "150px",
            paddingRight: "50px",
            paddingBottom: "40px",
          }}
        >
          {/* <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Serenite</h2> */}
          <img
            src={logo}
            alt="Serenite logo"
            style={{ width: "200px", marginBottom: "20px" }}
          />
          <h3 style={headingStyle}>Subscribe Our Newsletter</h3>
          <p>Best for one-man bands, web creators, and freelancers.</p>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={inputStyle}
            />
            <button style={buttonStyle}>
              <Send size={20} />
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Facebook size={24} style={socialIconStyle} />
            {/* <Twitter size={24} style={socialIconStyle} /> */}
            <Instagram size={24} style={socialIconStyle} />
            {/* <Linkedin size={24} style={socialIconStyle} /> */}
            {/* <Youtube size={24} style={socialIconStyle} /> */}
          </div>
        </div>
        <div
          style={{
            ...columnStyle,
            width: "30%",
            paddingLeft: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "110px",
            height: "100%",
          }}
        >
          <div>
            <h3 style={headingStyle}>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
              lectus, mattis non accumsan in, tempor dictum neque.
            </p>
            <div style={{ marginTop: "20px" }}>
              <h4
                style={{
                  ...headingStyle,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Clock size={20} style={{ marginRight: "10px" }} /> Opening
                Hours
              </h4>
              <p>Mon - Fri 9 AM - 6 PM,</p>
              <p>Sat 9 AM - 4 PM,</p>
              <p>Sunday - CLOSED</p>
            </div>
          </div>
          <p style={{}}>Copyright © 2024 Serenite Theme All rights reserved.</p>
        </div>
        <div style={{ ...columnStyle, paddingLeft: "70px", width: "15%" }}>
          <h3 style={headingStyle}>Company</h3>
          <a href="#" style={linkStyle}>
            About
          </a>
          <a href="#" style={linkStyle}>
            Contact Us
          </a>
          <a href="#" style={linkStyle}>
            Blog
          </a>
          <a href="#" style={linkStyle}>
            Culture
          </a>
          <a href="#" style={linkStyle}>
            Jobs
          </a>
        </div>
        <div
          style={{
            ...columnStyle,
            paddingLeft: "70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "100px",
            height: "100%",
            width: "15%",
          }}
        >
          <div>
            <h3 style={headingStyle}>Support</h3>
            <a href="#" style={linkStyle}>
              Getting started
            </a>
            <a href="#" style={linkStyle}>
              Chat our support
            </a>
            <a href="#" style={linkStyle}>
              Help center
            </a>
            <a href="#" style={linkStyle}>
              Services status
            </a>
            <a href="#" style={linkStyle}>
              Report a bug
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
            }}
          >
            <a
              href="#"
              style={{
                color: "#EE2424",
                marginRight: "20px",
                fontSize: "14px",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Terms of Use
            </a>
            <a
              href="#"
              style={{
                color: "#EE2424",
                textDecoration: "none",
                fontSize: "14px",
                flexShrink: 0,
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
