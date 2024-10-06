import React from 'react'
import Mufflers from "../../assets/images/mufflers.png";
import Rim from "../../assets/images/rim.jpeg";
import Towing from "../../assets/images/tow-car.png";

const AllService = () => {
  return (
    <>

       <div className="middle-content mt-6" style={{marginTop:"20px"}}>
       <div className='mx-4 px-2 '>
            <h2 style={{fontWeight:"700"}}>We are Qualified & Professional.
            </h2>
            <p>
            Choose Tire Aligners for peace of mind. We back up our work with industry-leading warranties because we are confident in the quality of our services.
            </p>
          </div>
        <div className="homepage-services-wrapper">
          <a href="/services/pa-inspection-and-emissions-test/">
            <div className="service-list-item">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/services/byop-icon.png"
                alt="$44.99 PA Inspection icon"
              />
              <h5>Suspention</h5>
            </div>
          </a>
          <a href="/services/valvoline-oil-change/">
            <div className="service-list-item">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/services/valvoline-oil-change-icon.png"
                alt="Valvoline Oil Change icon"
              />
              <h5>Oil Change / Lubes</h5>
            </div>
          </a>
          <a href="/services/alignment/">
            <div className="service-list-item">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/services/alignment-icon.png"
                alt="Alignment icon"
              />
              <h5>Alignment</h5>
            </div>
          </a>
          <a href="/services/brake-service/">
            <div className="service-list-item">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/services/brakes-icon.png"
                alt="Brake Service icon"
              />
              <h5>Tires / Brakes</h5>
            </div>
          </a>
          <a href="/services/heating-and-air-conditioning/">
            <div className="service-list-item">
              <img
                src={Mufflers}
                alt="Car A/C Service icon"
              />
              <h5>Mufflers</h5>
            </div>
          </a>
          <a href="/services/check-engine-light/">
            <div className="service-list-item">
              <img
                src={Rim}
                alt="Check Engine Light icon"
              />
              <h5>Rim / Tire Sales</h5>
            </div>
          </a>
          <a href="/services/bring-your-own-parts/">
            <div className="service-list-item overflow-hidden">
              <img
                src={Towing}
                style={{transform:'scale(1.2)'}}
                alt="Bring Your Own Parts icon"
              />
              <h5>Towing Services</h5>
            </div>
          </a>
         
        </div>
      </div>
    </>
  )
}

export default AllService
