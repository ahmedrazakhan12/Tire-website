import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      {/* Inline CSS for consistent hover effects */}
      <style>
        {`
          .footer-link, .social-icon {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .footer-link:hover, .social-icon:hover {
            color: #f2184f; /* Accent color on hover */
            transform: scale(1.1); /* Slight scale effect on hover */
          }
        `}
      </style>

      <footer
        style={{ backgroundColor: "#202C45", color: "#fff", padding: "50px 0" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          {/* Logo & Intro Section */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <a href="/" style={{ display: "block", marginBottom: "20px" }}>
              <img
                src={logo}
                alt="Tire Aligners"
                style={{ width: "100px", height: "100px" }}
              />
            </a>
            <p
              style={{
                fontSize: "18px",
                color: "#b0bec5",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              At Tire Aligners, we are committed to providing excellent services
              with integrity, passion, and professionalism. We strive to exceed
              your expectations with every visit.
            </p>
          </div>

          {/* Columns Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              textAlign: "left",
              marginBottom: "40px",
            }}
          >
            {/* Services Column */}
            <div style={{ flex: "1", minWidth: "220px", marginBottom: "20px" }}>
              <h4
                style={{
                  color: "rgb(242, 24, 79)",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                Our Services
              </h4>
              <ul
                style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}
              >
                <li>
                  <a href="/services/inspection" className="footer-link">
                    Inspection
                  </a>
                </li>
                <li>
                  <a href="/services/oil-change" className="footer-link">
                    Oil Change
                  </a>
                </li>
                <li>
                  <a href="/services/alignment" className="footer-link">
                    Alignment
                  </a>
                </li>
                <li>
                  <a href="/services/brakes" className="footer-link">
                    Brake Service
                  </a>
                </li>
                <li>
                  <a href="/services/heating-ac" className="footer-link">
                    Heating & A/C
                  </a>
                </li>
              </ul>
            </div>

            {/* Specials Column */}
            <div style={{ flex: "1", minWidth: "220px", marginBottom: "20px" }}>
              <h4
                style={{
                  color: "rgb(242, 24, 79)",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                Special Offers
              </h4>
              <ul
                style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}
              >
                <li>
                  <a href="/specials/tire-specials" className="footer-link">
                    Tire Specials
                  </a>
                </li>
                <li>
                  <a href="/specials/service-specials" className="footer-link">
                    Service Specials
                  </a>
                </li>
                <li>
                  <a href="/specials" className="footer-link">
                    Seasonal Discounts
                  </a>
                </li>
                <li>
                  <a href="/specials/coupons" className="footer-link">
                    Coupons & Deals
                  </a>
                </li>
              </ul>
            </div>

            {/* Tire Brands Column */}
            <div style={{ flex: "1", minWidth: "220px", marginBottom: "20px" }}>
              <h4
                style={{
                  color: "rgb(242, 24, 79)",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                Top Tire Brands
              </h4>
              <ul
                style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}
              >
                <li>
                  <a href="/tires/general" className="footer-link">
                    General
                  </a>
                </li>
                <li>
                  <a href="/tires/continental" className="footer-link">
                    Continental
                  </a>
                </li>
                <li>
                  <a href="/tires/goodyear" className="footer-link">
                    Goodyear
                  </a>
                </li>
                <li>
                  <a href="/tires/michelin" className="footer-link">
                    Michelin
                  </a>
                </li>
                <li>
                  <a href="/tires/pirelli" className="footer-link">
                    Pirelli
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div
            style={{
              textAlign: "center",
              borderTop: "1px solid #37474f",
              paddingTop: "30px",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ marginRight: "10px", fontSize: "24px" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ marginRight: "10px", fontSize: "24px" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ marginRight: "10px", fontSize: "24px" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p style={{ color: "#b0bec5", fontSize: "16px" }}>
              © 2024 Tire Aligners. All Rights Reserved.
            </p>
            <p>
              <a href="/privacy-policy/" className="footer-link">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/terms-of-use/" className="footer-link">
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
