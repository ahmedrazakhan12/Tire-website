import React from "react";

const About = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        padding: "40px",
        maxWidth: "900px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#2c3e50", fontSize: "48px", marginBottom: "20px" }}>
        About Us
      </h1>
      <p
        style={{
          color: "#7f8c8d",
          fontSize: "20px",
          lineHeight: "1.8",
          marginBottom: "40px",
        }}
      >
        <i
          className="fas fa-quote-left"
          style={{ color: "#3498db", marginRight: "10px" }}
        ></i>
        We are a dynamic team driven by passion and innovation, committed to
        delivering top-notch services that exceed expectations.
        <i
          className="fas fa-quote-right"
          style={{ color: "#3498db", marginLeft: "10px" }}
        ></i>
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "50px",
        }}
      >
        <div style={{ textAlign: "center", width: "30%" }}>
          <i
            className="fas fa-bullseye"
            style={{ fontSize: "48px", color: "#e74c3c", marginBottom: "10px" }}
          ></i>
          <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>Our Mission</h2>
          <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
            To deliver world-class services while maintaining a focus on
            customer satisfaction and innovation.
          </p>
        </div>

        <div style={{ textAlign: "center", width: "30%" }}>
          <i
            className="fas fa-eye"
            style={{ fontSize: "48px", color: "#2980b9", marginBottom: "10px" }}
          ></i>
          <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>Our Vision</h2>
          <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
            To lead the industry by fostering a culture of innovation and
            excellence, while impacting communities worldwide.
          </p>
        </div>

        <div style={{ textAlign: "center", width: "30%" }}>
          <i
            className="fas fa-users"
            style={{ fontSize: "48px", color: "#27ae60", marginBottom: "10px" }}
          ></i>
          <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>Our Team</h2>
          <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
            A dedicated group of professionals working together to drive success
            through creativity and collaboration.
          </p>
        </div>
      </div>

      <h2
        style={{
          color: "#2c3e50",
          fontSize: "32px",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        Our Core Values
      </h2>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          fontSize: "18px",
          color: "#7f8c8d",
          lineHeight: "1.8",
        }}
      >
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          Integrity
        </li>
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          Innovation
        </li>
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          Customer Focus
        </li>
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          Teamwork
        </li>
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          Excellence
        </li>
      </ul>

      <div style={{ marginTop: "50px", fontSize: "24px" }}>
        <i
          className="fas fa-phone-alt"
          style={{ color: "#2980b9", marginRight: "10px" }}
        ></i>
        Contact us at:{" "}
        <a
          href="mailto:info@company.com"
          style={{ color: "#2980b9", textDecoration: "none" }}
        >
          info@company.com
        </a>
      </div>
    </div>
  );
};

export default About;
