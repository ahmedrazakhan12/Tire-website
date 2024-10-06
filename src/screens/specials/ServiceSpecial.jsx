import React from 'react'
import { Link } from 'react-router-dom'

const ServiceSpecial = () => {
  return (
    <>
      <>
  <div className="main-content-wrapper">
    <div className="main-content">
      <h1>Service Specials</h1>
      <p className="large-print">
        <strong>
          Check out these service specials and discounts running right now!
        </strong>
      </p>
      <div className="specials-list">
        <div className="tab-bar">
          <Link to="/specials/tire-specials/">
            <div className="tab-bar-item large">Tire Specials</div>
          </Link>
          <div className="tab-bar-item large selected">Service Specials</div>
        </div>
        <div className="specials-list-wrapper">
          <div className="coupon">
            <div className="coupon-header">
              <h2>$30 Off Valvoline Oil Change</h2>
              <h4>With Purchase of Any Other Service!</h4>
            </div>
            <div>
              <strong className="size-up">As low as $49.99 with coupon</strong>
            </div>
            <div>
              <p>
                <strong>Expires Oct. 31, 2024</strong>
              </p>
            </div>
            <div>
              <p className="small-print">
                Most makes and models. Includes up to 5 quarts of full-synthetic
                Valvoline oil. Additional oil extra. Not to be combined with any
                other offers. Certain other restrictions may apply. See store
                for details.
              </p>
            </div>
            <p className="coupon-links">
              <a href="/specials/service-specials/30-off-valvoline-oil-change-with-any-other-service/">
                <strong>Open &amp; Print Coupon</strong>
              </a>
            </p>
          </div>
          <div className="coupon">
            <div className="coupon-header">
              <h2>$44.99 PA Inspection &amp; Emissions Test</h2>
              <h4>Includes Stickers!</h4>
            </div>
            <div>
              PA Inspection for only $44.99! Includes Inspection test, Emissions
              test, and stickers!
            </div>
            <div></div>
            <div>
              <p className="small-print">
                Pass or fail. 1996 and newer vehicles.
              </p>
            </div>
            <p className="coupon-links">
              <a href="/specials/service-specials/pa-inspection-special/">
                <strong>Open &amp; Print Coupon</strong>
              </a>
            </p>
          </div>
          <div className="coupon">
            <div className="coupon-header">
              <h2>$20 Off Alignment</h2>
              <h4>With Any Tire Purchase</h4>
            </div>
            <div>
              Make any tire purchase and save $20 instantly on the Alignment!
            </div>
            <div>
              <p>
                <strong>Expires Oct. 31, 2024</strong>
              </p>
            </div>
            <div>
              <p className="small-print">
                Must present coupon at time of service. Most makes and models.
                Some restrictions may apply. See store for details.
              </p>
            </div>
            <p className="coupon-links">
              <a href="/specials/service-specials/20-off-alignment/">
                <strong>Open &amp; Print Coupon</strong>
              </a>
            </p>
          </div>
          <div className="coupon">
            <div className="coupon-header">
              <h2>$49.99 A/C Check</h2>
              <h4>Full A/C System Inspection</h4>
            </div>
            <div>
              Includes visual inspection of A/C System, pressure &amp;
              temperature check and compressor operation check. Complimentary
              Lyft Ride to and from home or work.
            </div>
            <div>
              <p>
                <strong>Expires Oct. 31, 2024</strong>
              </p>
            </div>
            <div>
              <p className="small-print">See store for details.</p>
            </div>
            <p className="coupon-links">
              <a href="/specials/service-specials/4999-ac-check/">
                <strong>Open &amp; Print Coupon</strong>
              </a>
            </p>
          </div>
          <div className="coupon">
            <div className="coupon-header">
              <h2>Brakes</h2>
              <h4>$50 Off Per Axle</h4>
            </div>
            <div>
              Get $50 Off PER AXLE with purchase of new brakes and installation!
              Complimentary Lyft ride to and from home or work.
            </div>
            <div>
              <p>
                <strong>Expires Oct. 31, 2024</strong>
              </p>
            </div>
            <div>
              <p className="small-print">
                Most makes and models. Not to be combined with any other offers.
                Certain other restrictions may apply. See store for details.
              </p>
            </div>
            <p className="coupon-links">
              <a href="/specials/service-specials/brakes-40-off-per-axle/">
                <strong>Open &amp; Print Coupon</strong>
              </a>
            </p>
          </div>
          <div className="coupon">
            <div className="coupon-header">
              <h2>Free Check Engine Light Scan</h2>
            </div>
            <div>
              <strong>Check engine light on?</strong> Don't worry, we'll scan it
              and pull the codes free of charge!
            </div>
            <div></div>
            <div>
              <p className="small-print">
                Most makes and models. Additional diagnostic labor may be
                necessary. Coupon only valid for initial diagnostic computer
                scan, and does not cover the cost of repairs or additional
                diagnostic labor.
              </p>
            </div>
            <p className="coupon-links">
              <a href="/specials/service-specials/free-check-engine-light-scan/">
                <strong>Open &amp; Print Coupon</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
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
          <Link to="/specials/tire-specials/">Tire Specials</Link>
          <Link to="/specials/service-specials/">Service Specials</Link>
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
    
    </>
  )
}

export default ServiceSpecial