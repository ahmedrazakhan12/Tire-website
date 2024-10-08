import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="site-footer">
        <div className="footer-content">
          <div className="footer-row">
            <div className="footer-col">
              <h5>TIRES</h5>
              <a href="/tires/search-by/vehicle/">Search by Vehicle</a>
              <a href="/tires/search-by/size/">Search by Size</a>
              <a href="/tires/search-by/brand/">Search by Brand</a>
              <br />
              <h5>TIRE BRANDS</h5>
              <ul className="bare-list">
                <li>
                  <a href="/tires/brands/General/">General</a>
                </li>
                <li>
                  <a href="/tires/brands/Continental/">Continental</a>
                </li>
                <li>
                  <a href="/tires/brands/Goodyear/">Goodyear</a>
                </li>
                <li>
                  <a href="/tires/brands/Kelly/">Kelly</a>
                </li>
                <li>
                  <a href="/tires/brands/Michelin/">Michelin</a>
                </li>
                <li>
                  <a href="/tires/brands/Pirelli/">Pirelli</a>
                </li>
                <li>
                  <a href="/tires/brands/Bridgestone/">Bridgestone</a>
                </li>
                <li>
                  <a href="/tires/brands/Firestone/">Firestone</a>
                </li>
                <li>
                  <a href="/tires/search-by/brand/">
                    <strong>...AND MORE!</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>SERVICES</h5>
              <a href="/services/pa-inspection-and-emissions-test/">
                Inspection
              </a>
              <a href="/services/valvoline-oil-change/">Oil Change</a>
              <a href="/services/alignment/">Alignment</a>
              <a href="/services/brake-service/">Brakes</a>
              <a href="/services/heating-and-air-conditioning/">
                Heating &amp; A/C
              </a>
              <a href="/services/check-engine-light/">Check Engine Light</a>
              <a href="/services/bring-your-own-parts/">Bring Your Own Parts</a>
              <a href="/services/">...AND MORE!</a>
              <br />
              <h5>SPECIALS</h5>
              <a href="/specials/tire-specials/">Tire Specials</a>
              <a href="/specials/service-specials/">Service Specials</a>
            </div>
            <div className="footer-col"></div>
          </div>
          <div className="company-info-row">
            <div className="location-row">
              <div className="location-info">
                <h6>Montgomeryville</h6>
                <p className="address">616 Upper State Rd</p>
                <p className="phone-number">215-361-3616</p>
                <div className="loose-row margin-top-half">
                  <a href="/locations/montgomeryville/">
                    <i className="fas fa-info-circle" />
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Tires+Etc/@40.2358363,-75.2408391,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6a40e8a4f1ebd:0xd1c0b8bd17b7f0b9!8m2!3d40.2359011!4d-75.2387625"
                    target="_blank"
                  >
                    <i className="fas fa-map-marker-alt" />
                  </a>
                  <a href="tel:+12153613616">
                    <i className="fas fa-phone-alt" />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="company-info"
            >
              <a
                style={{
                  marginRight: "20px",
                }}
                href="/"
              >
                <img
                  style={{ width: "60px", height: "60px" }}
                  src={logo}
                  alt="Tire Aligners"
                />
              </a>
              <div>
                <p className="margin-top-half large-print">© 2024 Tires Etc</p>
                <a href="/privacy-policy/">Privacy Policy</a> |{" "}
                <a href="/terms-of-use/">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
