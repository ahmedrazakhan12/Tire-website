import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [aboutData, setAboutData] = useState(null); // State to store API data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch About data from API
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/about"
        );
        setAboutData(response.data); // Set the fetched data into state
        setLoading(false); // Turn off loading once data is fetched
      } catch (error) {
        console.error("Error fetching about data:", error);
        setError("Failed to load about information."); // Handle error
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []); // Empty dependency array ensures this runs only on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
        {aboutData.title}
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
        {aboutData.description}
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
          <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>
            {aboutData.our_mission}
          </h2>
          <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
            {aboutData.our_mission_description}
          </p>
        </div>

        <div style={{ textAlign: "center", width: "30%" }}>
          <i
            className="fas fa-eye"
            style={{ fontSize: "48px", color: "#2980b9", marginBottom: "10px" }}
          ></i>
          <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>
            {aboutData.our_vision}
          </h2>
          <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
            {aboutData.our_vision_description}
          </p>
        </div>

        <div style={{ textAlign: "center", width: "30%" }}>
          <i
            className="fas fa-users"
            style={{ fontSize: "48px", color: "#27ae60", marginBottom: "10px" }}
          ></i>
          <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>
            {aboutData.our_team}
          </h2>
          <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
            {aboutData.our_team_description}
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
        {aboutData.our_core_values}
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
          {aboutData.integrity}
        </li>
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          {aboutData.innovation}
        </li>
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          {aboutData.custom}
        </li>
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          {aboutData.teamwork}
        </li>
        <li style={{ marginBottom: "10px" }}>
          <i
            className="fas fa-check-circle"
            style={{ color: "#2ecc71", marginRight: "10px" }}
          ></i>
          {aboutData.excellence}
        </li>
      </ul>

      <div style={{ marginTop: "50px", fontSize: "24px" }}>
        <i
          className="fas fa-phone-alt"
          style={{ color: "#2980b9", marginRight: "10px" }}
        ></i>
        Contact us at:{" "}
        <a
          href={`mailto:${aboutData.contact}`}
          style={{ color: "#2980b9", textDecoration: "none" }}
        >
          {aboutData.contact}
        </a>
      </div>
    </div>
  );
};

export default About;
