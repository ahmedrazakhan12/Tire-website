// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const About = () => {
//   const [aboutData, setAboutData] = useState(null); // State to store API data
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for error handling

//   // Fetch About data from API
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const response = await axios.get(
//           "https://tirealigners.com/admin/api/about"
//         );
//         setAboutData(response.data); // Set the fetched data into state
//         setLoading(false); // Turn off loading once data is fetched
//       } catch (error) {
//         console.error("Error fetching about data:", error);
//         setError("Failed to load about information."); // Handle error
//         setLoading(false);
//       }
//     };

//     fetchAboutData();
//   }, []); // Empty dependency array ensures this runs only on mount

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         margin: "0 auto",
//         padding: "40px",
//         maxWidth: "900px",
//         textAlign: "center",
//       }}
//     >
//       <h1 style={{ color: "#2c3e50", fontSize: "48px", marginBottom: "20px" }}>
//         {aboutData.title}
//       </h1>
//       <p
//         style={{
//           color: "#7f8c8d",
//           fontSize: "20px",
//           lineHeight: "1.8",
//           marginBottom: "40px",
//         }}
//       >
//         <i
//           className="fas fa-quote-left"
//           style={{ color: "#3498db", marginRight: "10px" }}
//         ></i>
//         {aboutData.description}
//         <i
//           className="fas fa-quote-right"
//           style={{ color: "#3498db", marginLeft: "10px" }}
//         ></i>
//       </p>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           marginBottom: "50px",
//         }}
//       >
//         <div style={{ textAlign: "center", width: "30%" }}>
//           <i
//             className="fas fa-bullseye"
//             style={{ fontSize: "48px", color: "#e74c3c", marginBottom: "10px" }}
//           ></i>
//           <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>
//             {aboutData.our_mission}
//           </h2>
//           <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
//             {aboutData.our_mission_description}
//           </p>
//         </div>

//         <div style={{ textAlign: "center", width: "30%" }}>
//           <i
//             className="fas fa-eye"
//             style={{ fontSize: "48px", color: "#2980b9", marginBottom: "10px" }}
//           ></i>
//           <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>
//             {aboutData.our_vision}
//           </h2>
//           <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
//             {aboutData.our_vision_description}
//           </p>
//         </div>

//         <div style={{ textAlign: "center", width: "30%" }}>
//           <i
//             className="fas fa-users"
//             style={{ fontSize: "48px", color: "#27ae60", marginBottom: "10px" }}
//           ></i>
//           <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>
//             {aboutData.our_team}
//           </h2>
//           <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
//             {aboutData.our_team_description}
//           </p>
//         </div>
//       </div>

//       <h2
//         style={{
//           color: "#2c3e50",
//           fontSize: "32px",
//           marginTop: "40px",
//           marginBottom: "20px",
//         }}
//       >
//         {aboutData.our_core_values}
//       </h2>
//       <ul
//         style={{
//           listStyleType: "none",
//           padding: 0,
//           fontSize: "18px",
//           color: "#7f8c8d",
//           lineHeight: "1.8",
//         }}
//       >
//         <li style={{ marginBottom: "10px" }}>
//           <i
//             className="fas fa-check-circle"
//             style={{ color: "#2ecc71", marginRight: "10px" }}
//           ></i>
//           {aboutData.integrity}
//         </li>
//         <li style={{ marginBottom: "10px" }}>
//           <i
//             className="fas fa-check-circle"
//             style={{ color: "#2ecc71", marginRight: "10px" }}
//           ></i>
//           {aboutData.innovation}
//         </li>
//         <li style={{ marginBottom: "10px" }}>
//           <i
//             className="fas fa-check-circle"
//             style={{ color: "#2ecc71", marginRight: "10px" }}
//           ></i>
//           {aboutData.custom}
//         </li>
//         <li style={{ marginBottom: "10px" }}>
//           <i
//             className="fas fa-check-circle"
//             style={{ color: "#2ecc71", marginRight: "10px" }}
//           ></i>
//           {aboutData.teamwork}
//         </li>
//         <li style={{ marginBottom: "10px" }}>
//           <i
//             className="fas fa-check-circle"
//             style={{ color: "#2ecc71", marginRight: "10px" }}
//           ></i>
//           {aboutData.excellence}
//         </li>
//       </ul>

//       <div style={{ marginTop: "50px", fontSize: "24px" }}>
//         <i
//           className="fas fa-phone-alt"
//           style={{ color: "#2980b9", marginRight: "10px" }}
//         ></i>
//         Contact us at:{" "}
//         <a
//           href={`mailto:${aboutData.contact}`}
//           style={{ color: "#2980b9", textDecoration: "none" }}
//         >
//           {aboutData.contact}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  const aboutData = {
    title:
      "Welcome to Tire Aligners - Your Trusted Partner in Auto Services and Repairs",
    description:
      "At Tire Aligners, we pride ourselves on over a decade of excellence in automotive services and repairs. Located in the heart of Delaware, we have been serving the communities of Newark, Wilmington, Bear, New Castle, and surrounding areas, dedicating ourselves to providing unparalleled auto services. Our commitment to quality and customer satisfaction is at the core of everything we do.",
    our_mission: "Our Experience",
    our_mission_description:
      "With more than 10 years in the industry, Tire Aligners has established itself as a leader in automotive care. Our journey began with a simple mission: to offer reliable, high-quality auto services at fair prices. Over the years, we have expanded our services to meet the growing needs of our customers, adapting to new technologies and advancements in automotive care. Today, we are proud to say that we can service all brand name cars with a level of expertise that is unmatched in our area.",
    our_vision: "Our Team",
    our_vision_description:
      "At Tire Aligners, we believe that our strength lies in our people. All our mechanics and technicians are state-recognized, possessing certifications that underscore their expertise in the automotive field. They are passionate about cars and equally committed to our mission of delivering excellent service, ensuring that every vehicle meets our high standards of quality and safety.",
    our_team: "Our Services",
    our_team_description:
      "We offer a comprehensive range of automotive services, including suspension systems, wheel alignments, tire and brake services, muffler repair, towing services, oil changes, and rim and tire sales. We cover all aspects of car maintenance and repair, ensuring your vehicle stays safe and performs optimally.",
    our_core_values: "Our Core Values",
    integrity:
      "Customer satisfaction is not just a goal; it's a guarantee. We stand behind our work with a 100% satisfaction guarantee.",
    innovation:
      "We adapt to the latest technologies and advancements in automotive care to offer the best services available.",
    custom:
      "Offering personalized services tailored to the specific needs of each customer.",
    teamwork:
      "Our team collaborates to ensure top-tier service and customer satisfaction.",
    excellence:
      "We consistently strive to deliver excellent services that exceed our customers' expectations.",
    contact: "info@tirealigners.com",
  };

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
          flexWrap: "wrap", // Makes the layout responsive
        }}
      >
        <div
          style={{ textAlign: "center", width: "30%", marginBottom: "20px" }}
        >
          <i
            className="fas fa-bullseye icon-hover"
            style={{ fontSize: "48px", color: "#e74c3c", marginBottom: "10px" }}
          ></i>
          <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>
            {aboutData.our_mission}
          </h2>
          <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
            {aboutData.our_mission_description}
          </p>
        </div>

        <div
          style={{ textAlign: "center", width: "30%", marginBottom: "20px" }}
        >
          <i
            className="fas fa-users icon-hover"
            style={{ fontSize: "48px", color: "#27ae60", marginBottom: "10px" }}
          ></i>
          <h2 style={{ color: "#2c3e50", fontSize: "24px" }}>
            {aboutData.our_vision}
          </h2>
          <p style={{ color: "#7f8c8d", fontSize: "18px", lineHeight: "1.6" }}>
            {aboutData.our_vision_description}
          </p>
        </div>

        <div
          style={{ textAlign: "center", width: "30%", marginBottom: "20px" }}
        >
          <i
            className="fas fa-tools icon-hover"
            style={{ fontSize: "48px", color: "#2980b9", marginBottom: "10px" }}
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
      {/* CSS for animations */}
      <style jsx>{`
        .icon-hover {
          transition: transform 0.3s ease;
        }
        .icon-hover:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          div[style*="width: 30%"] {
            width: 100%;
            margin-bottom: 30px;
          }

          h1 {
            font-size: 36px;
          }

          h2 {
            font-size: 28px;
          }

          p {
            font-size: 16px;
          }

          ul li {
            font-size: 16px;
          }

          div[style*="fontSize: 24px"] {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
