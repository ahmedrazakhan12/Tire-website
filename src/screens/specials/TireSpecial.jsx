import React from 'react'
import { Link } from 'react-router-dom'

const Special = () => {
  return (
    <>
<div className="main-content-wrapper">
  <div className="main-content">
    <h1>Tire Specials</h1>
    <p className="large-print">
      <strong>
        Check out these tire rebates and discounts running right now!
      </strong>
    </p>
    <div className="specials-list">
      <div className="tab-bar">
        <div className="tab-bar-item large selected">Tire Specials</div>
          <Link to="/specials/service-specials/">
          <div className="tab-bar-item large">Service Specials</div>
        </Link>
      </div>
      <div className="specials-list-wrapper">
        <div className="specials-list-item">
          <h5>General: $100 Rebate</h5>
          <div>
            <a href="/specials/tire-specials/general-rebate/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-09-01-general-rebate-list-image.webp"
                alt="$100 Rebate With 4 Select General Tires"
              />
            </a>
            <div className="info-links">
              <a href="/specials/tire-specials/general-rebate/">See Details</a>
              <span>|</span>{" "}
              <a
                href="https://tiresetc-media-files.s3.amazonaws.com/rebate-forms/2024-09-01-general-rebate-form.pdf"
                target="_blank"
              >
                Rebate Form
              </a>
            </div>
          </div>
        </div>
        <div className="specials-list-item">
          <h5>Free Installation on Select Brands</h5>
          <div>
            <a href="/specials/tire-specials/free-installation-on-select-brands/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/free-installation-select-brands-list-image.jpg"
                alt="Free Tire Installation"
              />
            </a>
            <div className="info-links">
              <a href="/specials/tire-specials/free-installation-on-select-brands/">
                See Details
              </a>
            </div>
          </div>
        </div>
        <div className="specials-list-item">
          <h5>Goodyear: Up To $300 Rebate</h5>
          <div>
            <a href="/specials/tire-specials/goodyear-rebate/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-10-01-goodyear-rebate-list-image.jpg"
                alt="Up to $100 Rebate With 4 Select Goodyear Tires"
              />
            </a>
            <div className="info-links">
              <a href="/specials/tire-specials/goodyear-rebate/">See Details</a>
              <span>|</span>{" "}
              <a
                href="https://tiresetc-media-files.s3.amazonaws.com/rebate-forms/2024-10-01-goodyear-rebate-form.pdf"
                target="_blank"
              >
                Rebate Form
              </a>
            </div>
          </div>
        </div>
        <div className="specials-list-item">
          <h5>Hankook: $80 Instant Discount</h5>
          <div>
            <a href="/specials/tire-specials/hankook-instant-discount/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/hankook-80-off-with-4-list-image.jpg"
                alt="$80 Instant Discount With Any 4 Hankook Tires"
              />
            </a>
            <div className="info-links">
              <a href="/specials/tire-specials/hankook-instant-discount/">
                See Details
              </a>
            </div>
          </div>
        </div>
        <div className="specials-list-item">
          <h5>Hankook: Up To $120 Rebate</h5>
          <div>
            <a href="/specials/tire-specials/hankook-rebate/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-10-01-hankook-rebate-list-image.webp"
                alt="Up to $120 Rebate With 4 Select Hankook Tires"
              />
            </a>
            <div className="info-links">
              <a href="/specials/tire-specials/hankook-rebate/">See Details</a>
              <span>|</span>{" "}
              <a
                href="https://tiresetc-media-files.s3.amazonaws.com/rebate-forms/2024-10-01-hankook-rebate-form.pdf"
                target="_blank"
              >
                Rebate Form
              </a>
            </div>
          </div>
        </div>
        <div className="specials-list-item">
          <h5>Bridgestone: Up To $170 Rebate</h5>
          <div>
            <a href="/specials/tire-specials/bridgestone-rebate/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-10-01-bridgestone-rebate-list-image.webp"
                alt="$70 Rebate With 4 Select Bridgestone Tires"
              />
            </a>
            <div className="info-links">
              <a href="/specials/tire-specials/bridgestone-rebate/">
                See Details
              </a>
              <span>|</span>{" "}
              <a
                href="https://tiresetc-media-files.s3.amazonaws.com/rebate-forms/2024-10-01-bridgestone-rebate-form.pdf"
                target="_blank"
              >
                Rebate Form
              </a>
            </div>
          </div>
        </div>
        <div className="specials-list-item">
          <h5>Firestone: Up To $160 Rebate</h5>
          <div>
            <a href="/specials/tire-specials/firestone-rebate/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-10-01-firestone-rebate-list-image.png"
                alt="$60 Rebate With 4 Select Firestone Tires"
              />
            </a>
            <div className="info-links">
              <a href="/specials/tire-specials/firestone-rebate/">
                See Details
              </a>
              <span>|</span>{" "}
              <a
                href="https://tiresetc-media-files.s3.amazonaws.com/rebate-forms/2024-10-01-firestone-rebate-form.pdf"
                target="_blank"
              >
                Rebate Form
              </a>
            </div>
          </div>
        </div>
        <div className="specials-list-item">
          <h5>Cooper: Up To $100 Rebate</h5>
          <div>
            <a href="/specials/tire-specials/cooper-rebate/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-10-01-cooper-list-image.webp"
                alt="Up to $100 Rebate With 4 Select Cooper Tires"
              />
            </a>
            <div className="info-links">
              <a href="/specials/tire-specials/cooper-rebate/">See Details</a>
              <span>|</span>{" "}
              <a
                href="https://tiresetc-media-files.s3.amazonaws.com/rebate-forms/2024-10-01-cooper-rebate-form.pdf"
                target="_blank"
              >
                Rebate Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Special