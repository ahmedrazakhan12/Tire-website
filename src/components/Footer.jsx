import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
} from "lucide-react";

import logo from "../assets/images/logo.png";

const Footer = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  };

  const topSectionStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "-80px",
    zIndex: "999",
    flexWrap: "wrap", // Ensure elements wrap on smaller screens
    width: "100%",
  };

  const infoBoxStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    color: "grey",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1 200px", // Flex-grow, shrink, and min-width for responsiveness
    margin: "10px",
    maxWidth: "300px", // Limit width of boxes
  };

  const mainSectionStyle = {
    display: "flex",
    flexWrap: "wrap", // Allows wrapping on smaller screens
    justifyContent: "space-between",
    backgroundColor: "#2D3685",
    width: "100%",
  };

  const columnStyle = {
    padding: "20px",
    paddingTop: "100px",
    // flex: "1 1 400px", // Ensure columns are flexible
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
    padding: "10px 20px",
    backgroundColor: "#2d3685",
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
          <MapPin size={70} style={{ marginRight: "10px", color: "#ee2424" }} />
          <div>
            <h3 style={headingStyle}>
              <span style={{ color: "#2E4E53" }}>Our Location</span>
            </h3>
            <p style={{ fontSize: "14px" }}>
              401 S Dupont Hwy LOT B, New Castle, DE 19720, United States
            </p>
            <p style={{ fontSize: "14px" }}>
              Wilmington: 456 Elm Street, Wilmington, Delaware, 19801
            </p>
          </div>
        </div>
        <div style={infoBoxStyle}>
          <Phone size={70} style={{ marginRight: "10px", color: "#ee2424" }} />
          <div>
            <h3 style={headingStyle}>
              <span style={{ color: "#2E4E53" }}>Call Us</span>
            </h3>
            <p style={{ fontSize: "14px" }}>302.544.6246 </p>
            <p style={{ fontSize: "14px" }}>302.650.9861</p>
          </div>
        </div>
        <div style={infoBoxStyle}>
          <Mail size={70} style={{ marginRight: "10px", color: "#ee2424" }} />
          <div>
            <h3 style={headingStyle}>
              <span style={{ color: "#2E4E53" }}>Email Us</span>
            </h3>
            <p style={{ fontSize: "14px" }}>contact@tirealigners.com</p>
            <p style={{ fontSize: "14px" }}>service@tirealigners.com</p>
          </div>
        </div>
      </div>

      <div style={mainSectionStyle}>
        <div
          style={{
            ...columnStyle,
            backgroundColor: "#f47121",
            width: "100%",
            textAlign: "center", // Center content on smaller screens
          }}
          className="footer-testing"
        >
          <img
            src={logo}
            alt="Serenite logo"
            style={{ width: "200px", marginBottom: "20px" }}
          />
          <h3 style={headingStyle}>Subscribe Our Newsletter</h3>
          <p>Best for one-man bands, web creators, and freelancers.</p>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
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
            <Instagram size={24} style={socialIconStyle} />
          </div>
        </div>
        <div
          style={{ ...columnStyle, paddingLeft: "30px" }}
          className="footer-testing"
        >
          <h3 style={headingStyle}>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
            lectus, mattis non accumsan in, tempor dictum neque.
          </p>
          <div style={{ marginTop: "20px" }}>
            <h4
              style={{ ...headingStyle, display: "flex", alignItems: "center" }}
            >
              <Clock size={20} style={{ marginRight: "10px" }} /> Opening Hours
            </h4>
            <p>Mon - Fri 9 AM - 6 PM,</p>
            <p>Sat 9 AM - 4 PM,</p>
            <p>Sunday - CLOSED</p>
          </div>
        </div>

        <div style={columnStyle}>
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

        <div style={columnStyle}>
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

          {/* <div style={{marginTop:"100px" }}> */}
          {/* <p style={{marginLeft:"-100px"}}>Copyright © 2024 Serenite Theme All rights reserved.</p> */}
          {/* </div> */}
        </div>
        <div></div>
      </div>

      {/* Media Queries */}
      <style>
        {`
        
          @media (max-width: 768px) {
            h3 {
              font-size: 18px;
            }

            p {
              font-size: 14px;
            }


            input {
              width: 60%;
            }

            // .infoBoxStyle {
            //   flex: 1 1 100%; /* Make boxes stack vertically on smaller screens */
            // }

            .columnStyle {
              padding: 10px; /* Reduce padding on smaller screens */
              min-width: 100%; /* Columns stack vertically on small screens */
            }
          }
          @media (min-width: 1200px) {

            .footer-testing {
          flex:1 1 400px;
        }
          }

        `}
      </style>
    </footer>
  );
};

export default Footer;
