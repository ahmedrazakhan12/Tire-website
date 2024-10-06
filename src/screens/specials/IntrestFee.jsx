import React from 'react'
import BankCard from "../../assets/images/bank-card.png";
import BankCard2 from "../../assets/images/bank-card2.png";
import SnapCard from "../../assets/images/snap-logo.png";
const IntrestFee = () => {
  return (
       <>
  <div className="main-content-wrapper">
    <div className="main-content">
      <h1>Interest Free Financing Options Available</h1>
      <p className="size-up">
        We offer several interest-free financing options to fit within the needs
        of almost any budget. Most of these options can be used to purchase{" "}
        <em>any</em> tire or automotive repair service we offer.
      </p>
      <p className="size-up">
        Existing cardholders of any of these cards are welcome as well!
      </p>
      <div className="image-and-info-rows-wrapper reverse top-align">
        <div className="image-and-info-row">
          <a id="goodyear-credit-card" className="image-link default-cursor">
            <img
              src={BankCard}
              alt="Goodyear Credit Card image"
            />
          </a>
          <div>
            <h3>Goodyear Credit Card</h3>
            <p>
              The Goodyear Credit Card is a fast, convenient way to make your
              tire and service purchases.
            </p>
            <ul>
              <li>6 months Interest Free on purchases of $250 or more</li>
              <li>Up to double the rebate amount on Goodyear tires</li>
              <li>Payments as low as $42 per month*</li>
            </ul>
            <p className="small-print">
              * Based on card provider's monthly payment calculator. May be
              higher depending on purchase amount or other factors.
            </p>
          </div>
        </div>
        <div className="image-and-info-row">
          <a
            id="continental-general-credit-card"
            className="image-link default-cursor"
          >
            <img
              src={BankCard2}
              alt="Continental/General Credit Card image"
            />
          </a>
          <div>
            <h3>Continental/General Credit Card</h3>
            <p>
              Finance your tire purchase with the Continental or General Tire
              Synchrony Car Care credit card. Plus, use it for routine
              maintenance, gas, parts and more.
            </p>
            <ul>
              <li>6 months Interest Free on purchases of $199 or more</li>
              <li>
                Extra rebate money on qualifying Continental and/or General
                tires during qualifying rebate periods
              </li>
            </ul>
          </div>
        </div>
        <div className="image-and-info-row">
          <a id="snap-finance" className="image-link default-cursor">
            <img
              src={SnapCard}
              alt="Snap Financing logo"
            />
          </a>
          <div>
            <h3>Snap Finance</h3>
            <p>
              Get approved through Snap Finance for up to $3,000 with bad credit
              or no credit. Snap Finance has industry-leading approval rates!
            </p>
            <ul>
              <li>
                Industry leading approval rate for borrowers with bad credit, no
                credit, or even bankruptcy history
              </li>
              <li>
                Quick approval process and instant access to funds once approved
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="xl-print font-weight-bold">
        Talk to our friendly, knowledgeable staff for more details and to apply.
      </p>
    </div>
  </div>
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
          <a href="/services/pa-inspection-and-emissions-test/">Inspection</a>
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
        <div className="footer-col">
          <h5>ABOUT</h5>
          <a href="/contact-us/">Contact Us</a>
          <a href="/sitemap/">Sitemap</a>
          <br />
          <h5>FINANCING</h5>
          <a href="/financing/#goodyear-credit-card">Goodyear Credit Card</a>
          <a href="/financing/#continental-general-credit-card">
            Continental/General Credit Card
          </a>
          <a href="/financing/#bridgestone-firestone-credit-card">
            Bridgestone/Firestone Credit Card
          </a>
          <a href="/financing/#synchrony-car-care-credit-card">
            Synchrony Auto Care Card
          </a>
          <a href="/financing/#snap-finance">Snap Financing</a>
        </div>
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
          <div className="location-info">
            <h6>Clifton Heights</h6>
            <p className="address">515 W Baltimore Ave</p>
            <p className="phone-number">610-259-8800</p>
            <div className="loose-row margin-top-half">
              <a href="/locations/clifton-heights/">
                <i className="fas fa-info-circle" />
              </a>
              <a
                href="https://www.google.com/maps/place/Tires+Etc/@39.926831,-75.3076513,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6c2301110974f:0x839cfccfb447d827!8m2!3d39.9268148!4d-75.3054505"
                target="_blank"
              >
                <i className="fas fa-map-marker-alt" />
              </a>
              <a href="tel:+16102598800">
                <i className="fas fa-phone-alt" />
              </a>
            </div>
          </div>
          <div className="location-info">
            <h6>West Chester</h6>
            <p className="address">640 E Gay St</p>
            <p className="phone-number">610-738-9700</p>
            <div className="loose-row margin-top-half">
              <a href="/locations/west-chester/">
                <i className="fas fa-info-circle" />
              </a>
              <a
                href="https://www.google.com/maps/place/Tires+Etc/@39.9645727,-75.5976003,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6f167d840cf8b:0x921ac4f7ef3a61b4!8m2!3d39.9646104!4d-75.5954417"
                target="_blank"
              >
                <i className="fas fa-map-marker-alt" />
              </a>
              <a href="tel:+16107389700">
                <i className="fas fa-phone-alt" />
              </a>
            </div>
          </div>
        </div>
        <div className="company-info">
          <a href="/">
            <img
              src="/static/core/images/tires-etc-footer-logo.bbdc1f35da36.png"
              alt="Tires Etc logo"
            />
          </a>
          <p className="margin-top-half large-print">© 2024 Tires Etc</p>
          <a href="/privacy-policy/">Privacy Policy</a> |{" "}
          <a href="/terms-of-use/">Terms of Use</a>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default IntrestFee