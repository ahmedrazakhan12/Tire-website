// import React from "react";
// import Mufflers from "../../assets/images/mufflers.png";
// import Rim from "../../assets/images/rim.jpeg";
// import Towing from "../../assets/images/tow-car.png";
// import { Link } from "react-router-dom";

// const AllService = () => {
//   return (
//     <>
//       <div className="middle-content mt-6" style={{ marginTop: "20px" }}>
//         <div className="mx-4 px-2 ">
//           <h2 style={{ fontWeight: "700" }}>
//             We are Qualified & Professional.
//           </h2>
//           <p>
//             Choose Tire Aligners for peace of mind. We back up our work with
//             industry-leading warranties because we are confident in the quality
//             of our services.
//           </p>
//         </div>
//         <div className="homepage-services-wrapper">
//           <Link to="/service/suspention">
//             <div className="service-list-item">
//               <img
//                 src="https://tiresetc-media-files.s3.amazonaws.com/images/services/byop-icon.png"
//                 alt="$44.99 PA Inspection icon"
//               />
//               <h5>Suspention</h5>
//             </div>
//           </Link>
//           <Link to="/service/oil-change/">
//             <div className="service-list-item">
//               <img
//                 src="https://tiresetc-media-files.s3.amazonaws.com/images/services/valvoline-oil-change-icon.png"
//                 alt="Valvoline Oil Change icon"
//               />
//               <h5>Oil Change / Lubes</h5>
//             </div>
//           </Link>
//           <Link to="/service/alignment">
//             <div className="service-list-item">
//               <img
//                 src="https://tiresetc-media-files.s3.amazonaws.com/images/services/alignment-icon.png"
//                 alt="Alignment icon"
//               />
//               <h5>Alignment</h5>
//             </div>
//           </Link>
//           <Link to="/service/brakes/">
//             <div className="service-list-item">
//               <img
//                 src="https://tiresetc-media-files.s3.amazonaws.com/images/services/brakes-icon.png"
//                 alt="Brake Service icon"
//               />
//               <h5>Tires / Brakes</h5>
//             </div>
//           </Link>
//           <Link to="/service/mufflers">
//             <div className="service-list-item">
//               <img src={Mufflers} alt="Car A/C Service icon" />
//               <h5>Mufflers</h5>
//             </div>
//           </Link>
//           <Link to="/service/rim/">
//             <div className="service-list-item">
//               <img src={Rim} alt="Check Engine Light icon" />
//               <h5>Rim / Tire Sales</h5>
//             </div>
//           </Link>
//           <Link to="/service/towing/">
//             <div className="service-list-item overflow-hidden">
//               <img
//                 src={Towing}
//                 style={{ transform: "scale(1.2)" }}
//                 alt="Bring Your Own Parts icon"
//               />
//               <h5>Towing Services</h5>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllService;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllService = () => {
  const [services, setServices] = useState([]); // State to store services

  // Fetch services from the API when component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/services"
        );
        setServices(response.data); // Store API response in state
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []); // Empty dependency array to run effect only on mount

  return (
    <>
      <div className="middle-content mt-6" style={{ marginTop: "20px" }}>
        <div className="mx-4 px-2 ">
          <h2 style={{ fontWeight: "700" }}>
            We are Qualified & Professional.
          </h2>
          <p>
            Choose Tire Aligners for peace of mind. We back up our work with
            industry-leading warranties because we are confident in the quality
            of our services.
          </p>
        </div>

        {/* Rendering services dynamically */}
        <div className="homepage-services-wrapper">
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`}>
              <div className="service-list-item">
                <img
                  src={`http://localhost/${service.icon}`} // Use the icon from API
                  alt={`${service.title} icon`}
                />
                <h5>{service.title}</h5> {/* Display service title */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllService;
