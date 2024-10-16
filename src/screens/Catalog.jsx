import { ShoppingBag, ShoppingCart } from 'lucide-react';
import React from 'react'
import { toast } from 'react-toastify';
const Catalog = ({addToCart}) => {
  
  const tireData = [
      {
        id: 1,
        name: "Maxtour LX",
        brand: "GT Radial",
        size: "235/55R19 101V",
        price: 117.00,
        availableQty: 91,
        warranty: "70,000 Miles",
        image: "https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/gtradial-maxtour-lx.jpg",
        brandLogo: "https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/GT_Radial.png",
        specs: {
          size: "235/55R19",
          partNumber: "100UA3508",
          loadSpeed: "101V",
          sidewall: "BW",
          treadLife: "50K Miles"
        },
        ratings: {
          ownerSatisfaction: "",
          noise: "Very Good",
          rideComfort: "Very Good",
          handling: "Very Good",
          snowTraction: "Fair",
          iceBraking: "Good",
          dryBraking: "Very Good",
          wetBraking: "Good",
          hydroplaning: "Very Good",
          rollingResistance: "Very Good",
          treadLife: "50K Miles"
        },
        ranked: "#9 Ranked All Season SUV Tire",
        moreInfo: [
          "Brand name tire on sale at entry-level price!",
          "70,000 Mile Manufacturer Warranty",
          "Very good in rain and snow"
        ]
      },
      {
        id: 2,
        name: "Maxtour LX",
        brand: "GT Radial",
        size: "235/55R19 101V",
        price: 117.00,
        availableQty: 91,
        warranty: "70,000 Miles",
        image: "https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/gtradial-maxtour-lx.jpg",
        brandLogo: "https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/GT_Radial.png",
        specs: {
          size: "235/55R19",
          partNumber: "100UA3508",
          loadSpeed: "101V",
          sidewall: "BW",
          treadLife: "50K Miles"
        },
        ratings: {
          ownerSatisfaction: "",
          noise: "Very Good",
          rideComfort: "Very Good",
          handling: "Very Good",
          snowTraction: "Fair",
          iceBraking: "Good",
          dryBraking: "Very Good",
          wetBraking: "Good",
          hydroplaning: "Very Good",
          rollingResistance: "Very Good",
          treadLife: "50K Miles"
        },
        ranked: "#9 Ranked All Season SUV Tire",
        moreInfo: [
          "Brand name tire on sale at entry-level price!",
          "70,000 Mile Manufacturer Warranty",
          "Very good in rain and snow"
        ]
      }
      ,
      {
        id: 3,
        name: "Maxtour LX",
        brand: "GT Radial",
        size: "235/55R19 101V",
        price: 117.00,
        availableQty: 91,
        warranty: "70,000 Miles",
        image: "https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/gtradial-maxtour-lx.jpg",
        brandLogo: "https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/GT_Radial.png",
        specs: {
          size: "235/55R19",
          partNumber: "100UA3508",
          loadSpeed: "101V",
          sidewall: "BW",
          treadLife: "50K Miles"
        },
        ratings: {
          ownerSatisfaction: "",
          noise: "Very Good",
          rideComfort: "Very Good",
          handling: "Very Good",
          snowTraction: "Fair",
          iceBraking: "Good",
          dryBraking: "Very Good",
          wetBraking: "Good",
          hydroplaning: "Very Good",
          rollingResistance: "Very Good",
          treadLife: "50K Miles"
        },
        ranked: "#9 Ranked All Season SUV Tire",
        moreInfo: [
          "Brand name tire on sale at entry-level price!",
          "70,000 Mile Manufacturer Warranty",
          "Very good in rain and snow"
        ]
      }
    ];
  
      
      // CSS for progress bar and toast customization
      const styles = `
      .custom-toast {
        background-color: #333 !important;
        color: white !important;
      }
      .progress-bar {
        background-color: red !important;  /* Red progress bar (loader) */
      }
      `;
      
      
  return (
    <>
       <div className="main-content-wrapper">
  <div className="main-content">
    <div className="loading-gif full-page" id="catalog-full-page-loading-gif" />
    <div className="gbb" id="gbb">
    <div className="" >
        </div>
        {tireData.map((tire) => (
            <>
                <div className="m-result-card gbb-card ahmed-div" style={{ marginLeft: '-0px' }}>
      <div>
        <div className="gbb-card-header">
          <h3>Best Value</h3>
        </div>
        <div className="lead-row">
          <div className="result-card-image">
            <a href={`/tires/details/${tire.id}/${tire.brand}/${tire.name}/${tire.specs.partNumber}/`}>
              <img
                className="model-image"
                src={tire.image}
                alt={`${tire.brand} ${tire.name}`}
              />
            </a>
            <div className="warranty">
              Warranty
              <br />
              <span>{tire.warranty}</span>
            </div>
          </div>
          <div className="info-col">
            <div className="column-nowrap">
              <img
                className="logo-img"
                src={tire.brandLogo}
                alt={tire.brand}
              />
              <a href={`/tires/details/${tire.id}/${tire.brand}/${tire.name}/${tire.specs.partNumber}/`}>
                <h5>{tire.name}</h5>
              </a>
              <p>{tire.size}</p>
            </div>
            <div className="price-container">
              <span className="price">${tire.price.toFixed(2)}</span>
              <br />
              Per Tire
              <p className="qty">{tire.availableQty} Available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-button-container">
      <button className="btn btn-orange add-to-cart mt-2" onClick={() => addToCart(tire)} style={{width:'100%'}}>
            Add to Cart
      </button>
      </div>
      <div className="result-card-collapsibles">
        <div className="result-card-collapsible-item">
          <div className="rcc-header collapsible">
            <div className="wrapper">
              <div className="icon">
                <img src="/static/core/images/cr-thumb.24806d26d41f.png" alt="" />
              </div>
              <div className="text">
                {tire.ranked}
                <br />
                <span>by Consumer Reports</span>
              </div>
            </div>
            <div className="collapse-icon">
              <div className="collapse-open">
                <i className="fas fa-plus-circle" />
              </div>
              <div className="collapse-close">
                <i className="fas fa-minus-circle" />
              </div>
            </div>
          </div>
          <div className="rcc-body">
            <div className="rcc-col">
              {Object.entries(tire.ratings).map(([key, value]) => (
                <div className="rcc-row" key={key}>
                  <div>{key.split(/(?=[A-Z])/).join(' ')}</div>
                  <div>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="result-card-collapsible-item">
          <div className="rcc-header collapsible">
            <div className="wrapper">
              <div className="icon">
                <i className="fas fa-list" />
              </div>
              <div className="text">Specifications</div>
            </div>
            <div className="collapse-icon">
              <div className="collapse-open">
                <i className="fas fa-plus-circle" />
              </div>
              <div className="collapse-close">
                <i className="fas fa-minus-circle" />
              </div>
            </div>
          </div>
          <div className="rcc-body">
            <div className="rcc-col">
              {Object.entries(tire.specs).map(([key, value]) => (
                <div className="rcc-row" key={key}>
                  <div>{key.split(/(?=[A-Z])/).join(' ')}</div>
                  <div>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="result-card-collapsible-item">
          <div className="rcc-header collapsible">
            <div className="wrapper">
              <div className="icon blue">
                <i className="fas fa-info-circle" />
              </div>
              <div className="text">More Info</div>
            </div>
            <div className="collapse-icon">
              <div className="collapse-open">
                <i className="fas fa-plus-circle" />
              </div>
              <div className="collapse-close">
                <i className="fas fa-minus-circle" />
              </div>
            </div>
          </div>
          <div className="rcc-body">
            <ul>
              {tire.moreInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

            </>
        ))}
          {/* <div className="m-result-card gbb-card ahmed-div" style={{marginLeft:'-0px'}}>
        <div>
          <div className="gbb-card-header">
            <h3>Best Value</h3>
          </div>
          <div className="lead-row">
            <div className="result-card-image">
              <a href="/tires/details/10243/GT-Radial/Maxtour-LX/100UA3508/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/gtradial-maxtour-lx.jpg"
                  alt="GT Radial Maxtour LX"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>70,000 Miles</span>
              </div>
            </div>
            <div className="info-col">
              <div className="column-nowrap">
                <img
                  className="logo-img"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/GT_Radial.png"
                  alt="GT Radial"
                />
                <a href="/tires/details/10243/GT-Radial/Maxtour-LX/100UA3508/">
                  <h5>Maxtour LX</h5>
                </a>
                <p>235/55R19 101V</p>
              </div>
              <div className="price-container">
                <span className="price">$117.00</span>
                <br />
                Per Tire
                <p className="qty">91 Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-button-container">
          <form
            hx-post="/cart/add-tire/"
            hx-target="body"
            hx-swap="afterbegin"
            onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
          >
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
            />
            <input type="hidden" name="tire_id" defaultValue={10243} />
            <input
            //   type="submit"
              className="btn btn-orange add-to-cart mt-2"
              defaultValue="Add to Cart"
            />
          </form>
     
        </div>
        <div className="result-card-collapsibles">
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon">
                  <img
                    src="/static/core/images/cr-thumb.24806d26d41f.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  #9 Ranked All Season SUV Tire
                  <br />
                  <span>by Consumer Reports</span>
                </div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <div className="rcc-col">
                <div className="rcc-row">
                  <div>Owner Satisfaction</div>
                  <div />
                </div>
                <div className="rcc-row">
                  <div>Noise</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Ride Comfort</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Handling</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Snow Traction</div>
                  <div>Fair</div>
                </div>
                <div className="rcc-row">
                  <div>Ice Braking</div>
                  <div>Good</div>
                </div>
                <div className="rcc-row">
                  <div>Dry Braking</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Wet Braking</div>
                  <div>Good</div>
                </div>
                <div className="rcc-row">
                  <div>Hydroplaning</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Rolling Resistance</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Tread Life</div>
                  <div>50K Miles</div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon">
                  <i className="fas fa-list" />
                </div>
                <div className="text">Specifications</div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <div className="rcc-col">
                <div className="rcc-row">
                  <div>Warranty</div>
                  <div>70,000 Miles</div>
                </div>
                <div className="rcc-row">
                  <div>Size</div>
                  <div>235/55R19</div>
                </div>
                <div className="rcc-row">
                  <div>Part Number</div>
                  <div>100UA3508</div>
                </div>
                <div className="rcc-row">
                  <div>Load/Speed</div>
                  <div>101V</div>
                </div>
                <div className="rcc-row">
                  <div>Sidewall</div>
                  <div>BW</div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon blue">
                  <i className="fas fa-info-circle" />
                </div>
                <div className="text">More Info</div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <ul>
                <li>Brand name tire on sale at entry-level price!</li>
                <li>70,000 Mile Manufacturer Warranty</li>
                <li>Very good in rain and snow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-result-card gbb-card ahmed-div"style={{marginLeft:'-0px'}} >
        <div>
          <div className="gbb-card-header">
            <h3>Best Value</h3>
          </div>
          <div className="lead-row">
            <div className="result-card-image">
              <a href="/tires/details/10243/GT-Radial/Maxtour-LX/100UA3508/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/gtradial-maxtour-lx.jpg"
                  alt="GT Radial Maxtour LX"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>70,000 Miles</span>
              </div>
            </div>
            <div className="info-col">
              <div className="column-nowrap">
                <img
                  className="logo-img"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/GT_Radial.png"
                  alt="GT Radial"
                />
                <a href="/tires/details/10243/GT-Radial/Maxtour-LX/100UA3508/">
                  <h5>Maxtour LX</h5>
                </a>
                <p>235/55R19 101V</p>
              </div>
              <div className="price-container">
                <span className="price">$117.00</span>
                <br />
                Per Tire
                <p className="qty">91 Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-button-container">
          <form
            hx-post="/cart/add-tire/"
            hx-target="body"
            hx-swap="afterbegin"
            onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
          >
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
            />
            <input type="hidden" name="tire_id" defaultValue={10243} />
            <input
            //   type="submit"
              className="btn btn-orange add-to-cart mt-2"
              defaultValue="Add to Cart"
            />
          </form>
     
        </div>
        <div className="result-card-collapsibles">
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon">
                  <img
                    src="/static/core/images/cr-thumb.24806d26d41f.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  #9 Ranked All Season SUV Tire
                  <br />
                  <span>by Consumer Reports</span>
                </div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <div className="rcc-col">
                <div className="rcc-row">
                  <div>Owner Satisfaction</div>
                  <div />
                </div>
                <div className="rcc-row">
                  <div>Noise</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Ride Comfort</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Handling</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Snow Traction</div>
                  <div>Fair</div>
                </div>
                <div className="rcc-row">
                  <div>Ice Braking</div>
                  <div>Good</div>
                </div>
                <div className="rcc-row">
                  <div>Dry Braking</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Wet Braking</div>
                  <div>Good</div>
                </div>
                <div className="rcc-row">
                  <div>Hydroplaning</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Rolling Resistance</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Tread Life</div>
                  <div>50K Miles</div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon">
                  <i className="fas fa-list" />
                </div>
                <div className="text">Specifications</div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <div className="rcc-col">
                <div className="rcc-row">
                  <div>Warranty</div>
                  <div>70,000 Miles</div>
                </div>
                <div className="rcc-row">
                  <div>Size</div>
                  <div>235/55R19</div>
                </div>
                <div className="rcc-row">
                  <div>Part Number</div>
                  <div>100UA3508</div>
                </div>
                <div className="rcc-row">
                  <div>Load/Speed</div>
                  <div>101V</div>
                </div>
                <div className="rcc-row">
                  <div>Sidewall</div>
                  <div>BW</div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon blue">
                  <i className="fas fa-info-circle" />
                </div>
                <div className="text">More Info</div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <ul>
                <li>Brand name tire on sale at entry-level price!</li>
                <li>70,000 Mile Manufacturer Warranty</li>
                <li>Very good in rain and snow</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="m-result-card gbb-card ahmed-div"style={{marginLeft:'-0px'}} >
        <div>
          <div className="gbb-card-header">
            <h3>Best Value</h3>
          </div>
          <div className="lead-row">
            <div className="result-card-image">
              <a href="/tires/details/10243/GT-Radial/Maxtour-LX/100UA3508/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/gtradial-maxtour-lx.jpg"
                  alt="GT Radial Maxtour LX"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>70,000 Miles</span>
              </div>
            </div>
            <div className="info-col">
              <div className="column-nowrap">
                <img
                  className="logo-img"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/GT_Radial.png"
                  alt="GT Radial"
                />
                <a href="/tires/details/10243/GT-Radial/Maxtour-LX/100UA3508/">
                  <h5>Maxtour LX</h5>
                </a>
                <p>235/55R19 101V</p>
              </div>
              <div className="price-container">
                <span className="price">$117.00</span>
                <br />
                Per Tire
                <p className="qty">91 Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-button-container">
          <form
            hx-post="/cart/add-tire/"
            hx-target="body"
            hx-swap="afterbegin"
            onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
          >
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
            />
            <input type="hidden" name="tire_id" defaultValue={10243} />
            <input
            //   type="submit"
              className="btn btn-orange add-to-cart mt-2"
              defaultValue="Add to Cart"
            />
          </form>
     
        </div>
        <div className="result-card-collapsibles">
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon">
                  <img
                    src="/static/core/images/cr-thumb.24806d26d41f.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  #9 Ranked All Season SUV Tire
                  <br />
                  <span>by Consumer Reports</span>
                </div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <div className="rcc-col">
                <div className="rcc-row">
                  <div>Owner Satisfaction</div>
                  <div />
                </div>
                <div className="rcc-row">
                  <div>Noise</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Ride Comfort</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Handling</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Snow Traction</div>
                  <div>Fair</div>
                </div>
                <div className="rcc-row">
                  <div>Ice Braking</div>
                  <div>Good</div>
                </div>
                <div className="rcc-row">
                  <div>Dry Braking</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Wet Braking</div>
                  <div>Good</div>
                </div>
                <div className="rcc-row">
                  <div>Hydroplaning</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Rolling Resistance</div>
                  <div>Very Good</div>
                </div>
                <div className="rcc-row">
                  <div>Tread Life</div>
                  <div>50K Miles</div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon">
                  <i className="fas fa-list" />
                </div>
                <div className="text">Specifications</div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <div className="rcc-col">
                <div className="rcc-row">
                  <div>Warranty</div>
                  <div>70,000 Miles</div>
                </div>
                <div className="rcc-row">
                  <div>Size</div>
                  <div>235/55R19</div>
                </div>
                <div className="rcc-row">
                  <div>Part Number</div>
                  <div>100UA3508</div>
                </div>
                <div className="rcc-row">
                  <div>Load/Speed</div>
                  <div>101V</div>
                </div>
                <div className="rcc-row">
                  <div>Sidewall</div>
                  <div>BW</div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-card-collapsible-item">
            <div className="rcc-header collapsible">
              <div className="wrapper">
                <div className="icon blue">
                  <i className="fas fa-info-circle" />
                </div>
                <div className="text">More Info</div>
              </div>
              <div className="collapse-icon">
                <div className="collapse-open">
                  <i className="fas fa-plus-circle" />
                </div>
                <div className="collapse-close">
                  <i className="fas fa-minus-circle" />
                </div>
              </div>
            </div>
            <div className="rcc-body">
              <ul>
                <li>Brand name tire on sale at entry-level price!</li>
                <li>70,000 Mile Manufacturer Warranty</li>
                <li>Very good in rain and snow</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
   
    <div className="catalog-head" id="catalog-head">
      <div className="catalog-head-text">
        <h1>
          <a href="/tires/catalog/?width=235&ratio=55&rim=19">235/55R19</a>{" "}
          Tires
        </h1>
       
      </div>
     
    </div>
    <div className="catalog-container">
      <div className="catalog-filters" id="catalog-filters">
      <div className="my-4">
                  <div className="lyft-banner">
                    <div className="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="lyft-logo"
                      >
                        <path d="M0 81.1h77.8v208.7c0 33.1 15 52.8 27.2 61-12.7 11.1-51.2 20.9-80.2-2.8C7.8 331 0 299.6 0 269.1V81.1zm485.9 173.5v-22h23.8v-76.8h-26.1c-10.1-46.3-51.2-80.7-100.3-80.7-56.6 0-102.7 46-102.7 102.7V357c16 2.3 35.4-.3 51.7-14 17.1-14 24.8-37.2 24.8-59v-6.7h38.8v-76.8h-38.8v-23.3c0-34.6 52.2-34.6 52.2 0v77.1c0 56.6 46 102.7 102.7 102.7v-76.5c-14.5 0-26.1-11.7-26.1-25.9zm-294.3-99v113c0 15.4-23.8 15.4-23.8 0v-113H91v132.7c0 23.8 8 54 45 63.9 37 9.8 58.2-10.6 58.2-10.6-2.1 13.4-14.5 23.3-34.9 25.3-15.5 1.6-35.2-3.6-45-7.8v70.3c25.1 7.5 51.5 9.8 77.6 4.7 47.1-9.1 76.8-48.4 76.8-100.8V155.1h-77.1v.5z" />
                      </svg>
                    </div>
                    <div className="content">
                      <h4 className="complimentary">Complimentary Lyft Ride</h4>
                      <p className="subhead">To/From Home or Work</p>
                     
                    </div>
                  </div>
                  <style jsx>{`
                    .container {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      background-color: #f80086 !important;
                    }
                    .content {
                      margin-left: 20px;
                    }
                    .subhead {
                      font-size: 13px;
                    }
                    .lyft-banner {
                      display: flex;
                      align-items: center;
                      background-color: #f47121;
                      color: white;
                      padding: 0px 35px;
                      border-radius: 8px;
                      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                      max-width: 400px;
                      width: 100%;
                    }
                    .logo {
                      margin-right: 20px;
                    }
                    .lyft-logo {
                      width: 40px;
                      height: 40px;
                      transform: scale(1.8);
                      fill: currentColor;
                    }
                    .content {
                      flex-grow: 1;
                    }
                    .complimentary {
                      font-weight: 900;
                      margin: 15px 0 0px 0;
                      font-family: "Rajdhani", sans-serif;
                    }
                    p {
                      font-size: 0.875rem;
                      margin: 0 0 0px 0;
                    }
                    .details {
                      font-size: 0.75rem;
                    }
                    .click-details {
                      text-decoration: underline;
                      cursor: pointer;
                      display: inline-flex;
                      align-items: center;
                    }
                    .arrow-icon {
                      width: 14px;
                      height: 14px;
                      margin-left: 4px;
                    }
                    @media (max-width: 480px) {
                      .lyft-banner {
                        flex-direction: column;
                        text-align: center;
                      }
                      .logo {
                        margin-right: 0;
                        margin-bottom: 10px;
                      }
                    }
                  `}</style>
                </div>
        <div className="catalog-fitment-panel">
          <div className="fitment-panel-header collapsible active">
            <div className="tight-row">
              <div className="collapse-icon">
                <i
                  className="fas fa-chevron-circle-right collapse-open"
                  aria-hidden="true"
                />
                <i
                  className="fas fa-chevron-circle-down collapse-close"
                  aria-hidden="true"
                />
              </div>
              <div>Selected Vehicle</div>
            </div>
            <form
              hx-post="/vehicles/clear-fitment/"
              hx-trigger="click"
              onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
            >
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
              />
              <input
                type="hidden"
                name="next"
                defaultValue="/tires/catalog/?width=235&ratio=55&rim=19"
              />
              <div className="clear-filters">
                <span>
                  <i className="fas fa-times-circle" />
                </span>
                Remove
                <br />
                Vehicle
              </div>
            </form>
          </div>
          <div className="fitment-panel-body">
            <h6>2018 Chrysler 300 Touring L (AWD)</h6>
            <div className="select-wrap">
              <label htmlFor="selected-fitment">Selected Fitment</label>
              <select
                id="selected-fitment"
                name="fitment_id"
                hx-get="/tires/catalog/change-fitment/"
                hx-trigger="change"
                onchange="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
              >
                <option value={38561} selected="">
                  235/55R19 101H
                </option>
              </select>
            </div>
            <div className="row-space-between">
              <p className="small-print">
                Filters specific to your vehicle are applied
              </p>
              <div
                className="clear-filters"
                hx-get="/tires/catalog/update/?width=235&ratio=55&rim=19"
                hx-target="#catalog-results"
                hx-swap="outerHTML"
                onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
              >
                <span>
                  <i className="fas fa-times-circle" />
                </span>
                Clear
                <br />
                Vehicle
                <br />
                Filters
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
      <div className="catalog-results-container" id="catalog-results">
        <div id="loading" />
        <div className="result-card">
          <div className="row-nowrap">
            <div className="result-card-image">
              <img
                className="brand-logo"
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/General.png"
                alt="General logo"
              />
              <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/general-grabber-hts60.jpg"
                  alt="General Grabber HTS60"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>50,000 Miles</span>
              </div>
            </div>
            <div className="result-card-info">
              <div className="product-info">
                <div className="header-link">
                  <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                    <span className="brand">General</span>
                    <br />
                    <span className="model">Grabber HTS60</span>
                  </a>
                </div>
                <p>
                  Size: <span>235/55R19</span>
                </p>
                <p>
                  Part Number: <span>04504990000</span>
                </p>
                <p>
                  Load/Speed: <span>101H</span>
                </p>
                <p>
                  Sidewall: <span>BSW</span>
                </p>
                <p>
                  Ply: <span>SL</span>
                </p>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <img
                          src="/static/core/images/cr-thumb.24806d26d41f.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        #4 Ranked All Season Truck Tire
                        <br />
                        <span>by Consumer Reports</span>
                      </div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    <div className="rcc-col">
                      <div className="rcc-row">
                        <div>Owner Satisfaction</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Noise</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ride Comfort</div>
                        <div>Fair</div>
                      </div>
                      <div className="rcc-row">
                        <div>Handling</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Snow Traction</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ice Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Dry Braking</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Wet Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Hydroplaning</div>
                        <div>Excellent</div>
                      </div>
                      <div className="rcc-row">
                        <div>Rolling Resistance</div>
                        <div>Poor</div>
                      </div>
                      <div className="rcc-row">
                        <div>Tread Life</div>
                        <div>55K Miles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header rcc-special collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <i className="fas fa-tag" />
                      </div>
                      <div className="text">$100 Rebate With 4</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Purchase a set of four (4) qualifying General Tires and get
                    a $100 Visa® Prepaid Card by mail. This is a manufacturer's
                    rebate and is contingent upon proper completion and
                    submission of …
                    <a href="/specials/tire-specials/general-rebate/">
                      <strong>See Details</strong>
                    </a>
                    <br />
                    <strong>Expires Oct. 31, 2024</strong>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon blue">
                        <i className="fas fa-info-circle" />
                      </div>
                      <div className="text">More Info</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Ranked 2nd by Consumer Reports in the all season truck
                    category.
                    <br />
                    <br />
                    <h6>Benefits:</h6>
                    <ul>
                      <li>
                        Ranked Very Good by Consumer Reports in noise, rain, and
                        snow traction
                      </li>
                      <li>65,000 mile warranty for S &amp; T rated tires</li>
                      <li>Great for SUVs and light-duty pickups</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="price-info">
                <div className="compare-box"></div>
                <div className="price-container">
                  <div className="tight-row">
                    <form
                      hx-post="/cart/add-tire/"
                      hx-target="body"
                      hx-swap="afterbegin"
                      onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                      />
                      <input type="hidden" name="tire_id" defaultValue={3016} />
                    
                    </form>
                    <div
                      className="map-info"
                      hx-get="/tires/map-info-modal/"
                      hx-target="body"
                      hx-swap="afterbegin"
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                  <p className="qty">11 Available</p>
                </div>
                <div className="cart-button-container">
                  <form
                    hx-post="/cart/add-tire/"
                    hx-target="body"
                    hx-swap="afterbegin"
                    onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                  >
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                    />
                    <input type="hidden" name="tire_id" defaultValue={3016} />
                    <input
                      type="submit"
                      className="btn btn-orange add-to-cart"
                      defaultValue="Add to Cart"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="result-card">
          <div className="row-nowrap">
            <div className="result-card-image">
              <img
                className="brand-logo"
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/General.png"
                alt="General logo"
              />
              <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/general-grabber-hts60.jpg"
                  alt="General Grabber HTS60"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>50,000 Miles</span>
              </div>
            </div>
            <div className="result-card-info">
              <div className="product-info">
                <div className="header-link">
                  <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                    <span className="brand">General</span>
                    <br />
                    <span className="model">Grabber HTS60</span>
                  </a>
                </div>
                <p>
                  Size: <span>235/55R19</span>
                </p>
                <p>
                  Part Number: <span>04504990000</span>
                </p>
                <p>
                  Load/Speed: <span>101H</span>
                </p>
                <p>
                  Sidewall: <span>BSW</span>
                </p>
                <p>
                  Ply: <span>SL</span>
                </p>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <img
                          src="/static/core/images/cr-thumb.24806d26d41f.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        #4 Ranked All Season Truck Tire
                        <br />
                        <span>by Consumer Reports</span>
                      </div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    <div className="rcc-col">
                      <div className="rcc-row">
                        <div>Owner Satisfaction</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Noise</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ride Comfort</div>
                        <div>Fair</div>
                      </div>
                      <div className="rcc-row">
                        <div>Handling</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Snow Traction</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ice Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Dry Braking</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Wet Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Hydroplaning</div>
                        <div>Excellent</div>
                      </div>
                      <div className="rcc-row">
                        <div>Rolling Resistance</div>
                        <div>Poor</div>
                      </div>
                      <div className="rcc-row">
                        <div>Tread Life</div>
                        <div>55K Miles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header rcc-special collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <i className="fas fa-tag" />
                      </div>
                      <div className="text">$100 Rebate With 4</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Purchase a set of four (4) qualifying General Tires and get
                    a $100 Visa® Prepaid Card by mail. This is a manufacturer's
                    rebate and is contingent upon proper completion and
                    submission of …
                    <a href="/specials/tire-specials/general-rebate/">
                      <strong>See Details</strong>
                    </a>
                    <br />
                    <strong>Expires Oct. 31, 2024</strong>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon blue">
                        <i className="fas fa-info-circle" />
                      </div>
                      <div className="text">More Info</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Ranked 2nd by Consumer Reports in the all season truck
                    category.
                    <br />
                    <br />
                    <h6>Benefits:</h6>
                    <ul>
                      <li>
                        Ranked Very Good by Consumer Reports in noise, rain, and
                        snow traction
                      </li>
                      <li>65,000 mile warranty for S &amp; T rated tires</li>
                      <li>Great for SUVs and light-duty pickups</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="price-info">
                <div className="compare-box"></div>
                <div className="price-container">
                  <div className="tight-row">
                    <form
                      hx-post="/cart/add-tire/"
                      hx-target="body"
                      hx-swap="afterbegin"
                      onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                      />
                      <input type="hidden" name="tire_id" defaultValue={3016} />
                    
                    </form>
                    <div
                      className="map-info"
                      hx-get="/tires/map-info-modal/"
                      hx-target="body"
                      hx-swap="afterbegin"
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                  <p className="qty">11 Available</p>
                </div>
                <div className="cart-button-container">
                  <form
                    hx-post="/cart/add-tire/"
                    hx-target="body"
                    hx-swap="afterbegin"
                    onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                  >
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                    />
                    <input type="hidden" name="tire_id" defaultValue={3016} />
                    <input
                      type="submit"
                      className="btn btn-orange add-to-cart"
                      defaultValue="Add to Cart"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="result-card">
          <div className="row-nowrap">
            <div className="result-card-image">
              <img
                className="brand-logo"
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/General.png"
                alt="General logo"
              />
              <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/general-grabber-hts60.jpg"
                  alt="General Grabber HTS60"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>50,000 Miles</span>
              </div>
            </div>
            <div className="result-card-info">
              <div className="product-info">
                <div className="header-link">
                  <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                    <span className="brand">General</span>
                    <br />
                    <span className="model">Grabber HTS60</span>
                  </a>
                </div>
                <p>
                  Size: <span>235/55R19</span>
                </p>
                <p>
                  Part Number: <span>04504990000</span>
                </p>
                <p>
                  Load/Speed: <span>101H</span>
                </p>
                <p>
                  Sidewall: <span>BSW</span>
                </p>
                <p>
                  Ply: <span>SL</span>
                </p>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <img
                          src="/static/core/images/cr-thumb.24806d26d41f.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        #4 Ranked All Season Truck Tire
                        <br />
                        <span>by Consumer Reports</span>
                      </div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    <div className="rcc-col">
                      <div className="rcc-row">
                        <div>Owner Satisfaction</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Noise</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ride Comfort</div>
                        <div>Fair</div>
                      </div>
                      <div className="rcc-row">
                        <div>Handling</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Snow Traction</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ice Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Dry Braking</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Wet Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Hydroplaning</div>
                        <div>Excellent</div>
                      </div>
                      <div className="rcc-row">
                        <div>Rolling Resistance</div>
                        <div>Poor</div>
                      </div>
                      <div className="rcc-row">
                        <div>Tread Life</div>
                        <div>55K Miles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header rcc-special collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <i className="fas fa-tag" />
                      </div>
                      <div className="text">$100 Rebate With 4</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Purchase a set of four (4) qualifying General Tires and get
                    a $100 Visa® Prepaid Card by mail. This is a manufacturer's
                    rebate and is contingent upon proper completion and
                    submission of …
                    <a href="/specials/tire-specials/general-rebate/">
                      <strong>See Details</strong>
                    </a>
                    <br />
                    <strong>Expires Oct. 31, 2024</strong>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon blue">
                        <i className="fas fa-info-circle" />
                      </div>
                      <div className="text">More Info</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Ranked 2nd by Consumer Reports in the all season truck
                    category.
                    <br />
                    <br />
                    <h6>Benefits:</h6>
                    <ul>
                      <li>
                        Ranked Very Good by Consumer Reports in noise, rain, and
                        snow traction
                      </li>
                      <li>65,000 mile warranty for S &amp; T rated tires</li>
                      <li>Great for SUVs and light-duty pickups</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="price-info">
                <div className="compare-box"></div>
                <div className="price-container">
                  <div className="tight-row">
                    <form
                      hx-post="/cart/add-tire/"
                      hx-target="body"
                      hx-swap="afterbegin"
                      onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                      />
                      <input type="hidden" name="tire_id" defaultValue={3016} />
                    
                    </form>
                    <div
                      className="map-info"
                      hx-get="/tires/map-info-modal/"
                      hx-target="body"
                      hx-swap="afterbegin"
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                  <p className="qty">11 Available</p>
                </div>
                <div className="cart-button-container">
                  <form
                    hx-post="/cart/add-tire/"
                    hx-target="body"
                    hx-swap="afterbegin"
                    onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                  >
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                    />
                    <input type="hidden" name="tire_id" defaultValue={3016} />
                    <input
                      type="submit"
                      className="btn btn-orange add-to-cart"
                      defaultValue="Add to Cart"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="result-card">
          <div className="row-nowrap">
            <div className="result-card-image">
              <img
                className="brand-logo"
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/General.png"
                alt="General logo"
              />
              <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/general-grabber-hts60.jpg"
                  alt="General Grabber HTS60"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>50,000 Miles</span>
              </div>
            </div>
            <div className="result-card-info">
              <div className="product-info">
                <div className="header-link">
                  <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                    <span className="brand">General</span>
                    <br />
                    <span className="model">Grabber HTS60</span>
                  </a>
                </div>
                <p>
                  Size: <span>235/55R19</span>
                </p>
                <p>
                  Part Number: <span>04504990000</span>
                </p>
                <p>
                  Load/Speed: <span>101H</span>
                </p>
                <p>
                  Sidewall: <span>BSW</span>
                </p>
                <p>
                  Ply: <span>SL</span>
                </p>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <img
                          src="/static/core/images/cr-thumb.24806d26d41f.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        #4 Ranked All Season Truck Tire
                        <br />
                        <span>by Consumer Reports</span>
                      </div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    <div className="rcc-col">
                      <div className="rcc-row">
                        <div>Owner Satisfaction</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Noise</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ride Comfort</div>
                        <div>Fair</div>
                      </div>
                      <div className="rcc-row">
                        <div>Handling</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Snow Traction</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ice Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Dry Braking</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Wet Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Hydroplaning</div>
                        <div>Excellent</div>
                      </div>
                      <div className="rcc-row">
                        <div>Rolling Resistance</div>
                        <div>Poor</div>
                      </div>
                      <div className="rcc-row">
                        <div>Tread Life</div>
                        <div>55K Miles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header rcc-special collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <i className="fas fa-tag" />
                      </div>
                      <div className="text">$100 Rebate With 4</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Purchase a set of four (4) qualifying General Tires and get
                    a $100 Visa® Prepaid Card by mail. This is a manufacturer's
                    rebate and is contingent upon proper completion and
                    submission of …
                    <a href="/specials/tire-specials/general-rebate/">
                      <strong>See Details</strong>
                    </a>
                    <br />
                    <strong>Expires Oct. 31, 2024</strong>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon blue">
                        <i className="fas fa-info-circle" />
                      </div>
                      <div className="text">More Info</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Ranked 2nd by Consumer Reports in the all season truck
                    category.
                    <br />
                    <br />
                    <h6>Benefits:</h6>
                    <ul>
                      <li>
                        Ranked Very Good by Consumer Reports in noise, rain, and
                        snow traction
                      </li>
                      <li>65,000 mile warranty for S &amp; T rated tires</li>
                      <li>Great for SUVs and light-duty pickups</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="price-info">
                <div className="compare-box"></div>
                <div className="price-container">
                  <div className="tight-row">
                    <form
                      hx-post="/cart/add-tire/"
                      hx-target="body"
                      hx-swap="afterbegin"
                      onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                      />
                      <input type="hidden" name="tire_id" defaultValue={3016} />
                    
                    </form>
                    <div
                      className="map-info"
                      hx-get="/tires/map-info-modal/"
                      hx-target="body"
                      hx-swap="afterbegin"
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                  <p className="qty">11 Available</p>
                </div>
                <div className="cart-button-container">
                  <form
                    hx-post="/cart/add-tire/"
                    hx-target="body"
                    hx-swap="afterbegin"
                    onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                  >
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                    />
                    <input type="hidden" name="tire_id" defaultValue={3016} />
                    <input
                      type="submit"
                      className="btn btn-orange add-to-cart"
                      defaultValue="Add to Cart"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="result-card">
          <div className="row-nowrap">
            <div className="result-card-image">
              <img
                className="brand-logo"
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/General.png"
                alt="General logo"
              />
              <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/general-grabber-hts60.jpg"
                  alt="General Grabber HTS60"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>50,000 Miles</span>
              </div>
            </div>
            <div className="result-card-info">
              <div className="product-info">
                <div className="header-link">
                  <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                    <span className="brand">General</span>
                    <br />
                    <span className="model">Grabber HTS60</span>
                  </a>
                </div>
                <p>
                  Size: <span>235/55R19</span>
                </p>
                <p>
                  Part Number: <span>04504990000</span>
                </p>
                <p>
                  Load/Speed: <span>101H</span>
                </p>
                <p>
                  Sidewall: <span>BSW</span>
                </p>
                <p>
                  Ply: <span>SL</span>
                </p>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <img
                          src="/static/core/images/cr-thumb.24806d26d41f.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        #4 Ranked All Season Truck Tire
                        <br />
                        <span>by Consumer Reports</span>
                      </div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    <div className="rcc-col">
                      <div className="rcc-row">
                        <div>Owner Satisfaction</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Noise</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ride Comfort</div>
                        <div>Fair</div>
                      </div>
                      <div className="rcc-row">
                        <div>Handling</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Snow Traction</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ice Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Dry Braking</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Wet Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Hydroplaning</div>
                        <div>Excellent</div>
                      </div>
                      <div className="rcc-row">
                        <div>Rolling Resistance</div>
                        <div>Poor</div>
                      </div>
                      <div className="rcc-row">
                        <div>Tread Life</div>
                        <div>55K Miles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header rcc-special collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <i className="fas fa-tag" />
                      </div>
                      <div className="text">$100 Rebate With 4</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Purchase a set of four (4) qualifying General Tires and get
                    a $100 Visa® Prepaid Card by mail. This is a manufacturer's
                    rebate and is contingent upon proper completion and
                    submission of …
                    <a href="/specials/tire-specials/general-rebate/">
                      <strong>See Details</strong>
                    </a>
                    <br />
                    <strong>Expires Oct. 31, 2024</strong>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon blue">
                        <i className="fas fa-info-circle" />
                      </div>
                      <div className="text">More Info</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Ranked 2nd by Consumer Reports in the all season truck
                    category.
                    <br />
                    <br />
                    <h6>Benefits:</h6>
                    <ul>
                      <li>
                        Ranked Very Good by Consumer Reports in noise, rain, and
                        snow traction
                      </li>
                      <li>65,000 mile warranty for S &amp; T rated tires</li>
                      <li>Great for SUVs and light-duty pickups</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="price-info">
                <div className="compare-box"></div>
                <div className="price-container">
                  <div className="tight-row">
                    <form
                      hx-post="/cart/add-tire/"
                      hx-target="body"
                      hx-swap="afterbegin"
                      onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                      />
                      <input type="hidden" name="tire_id" defaultValue={3016} />
                    
                    </form>
                    <div
                      className="map-info"
                      hx-get="/tires/map-info-modal/"
                      hx-target="body"
                      hx-swap="afterbegin"
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                  <p className="qty">11 Available</p>
                </div>
                <div className="cart-button-container">
                  <form
                    hx-post="/cart/add-tire/"
                    hx-target="body"
                    hx-swap="afterbegin"
                    onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                  >
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                    />
                    <input type="hidden" name="tire_id" defaultValue={3016} />
                    <input
                      type="submit"
                      className="btn btn-orange add-to-cart"
                      defaultValue="Add to Cart"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>   <div className="result-card">
          <div className="row-nowrap">
            <div className="result-card-image">
              <img
                className="brand-logo"
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/General.png"
                alt="General logo"
              />
              <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                <img
                  className="model-image"
                  src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_model_images/general-grabber-hts60.jpg"
                  alt="General Grabber HTS60"
                />
              </a>
              <div className="warranty">
                Warranty
                <br />
                <span>50,000 Miles</span>
              </div>
            </div>
            <div className="result-card-info">
              <div className="product-info">
                <div className="header-link">
                  <a href="/tires/details/3016/General/Grabber-HTS60/04504990000/">
                    <span className="brand">General</span>
                    <br />
                    <span className="model">Grabber HTS60</span>
                  </a>
                </div>
                <p>
                  Size: <span>235/55R19</span>
                </p>
                <p>
                  Part Number: <span>04504990000</span>
                </p>
                <p>
                  Load/Speed: <span>101H</span>
                </p>
                <p>
                  Sidewall: <span>BSW</span>
                </p>
                <p>
                  Ply: <span>SL</span>
                </p>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <img
                          src="/static/core/images/cr-thumb.24806d26d41f.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        #4 Ranked All Season Truck Tire
                        <br />
                        <span>by Consumer Reports</span>
                      </div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    <div className="rcc-col">
                      <div className="rcc-row">
                        <div>Owner Satisfaction</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Noise</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ride Comfort</div>
                        <div>Fair</div>
                      </div>
                      <div className="rcc-row">
                        <div>Handling</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Snow Traction</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Ice Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Dry Braking</div>
                        <div>Very Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Wet Braking</div>
                        <div>Good</div>
                      </div>
                      <div className="rcc-row">
                        <div>Hydroplaning</div>
                        <div>Excellent</div>
                      </div>
                      <div className="rcc-row">
                        <div>Rolling Resistance</div>
                        <div>Poor</div>
                      </div>
                      <div className="rcc-row">
                        <div>Tread Life</div>
                        <div>55K Miles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header rcc-special collapsible">
                    <div className="wrapper">
                      <div className="icon">
                        <i className="fas fa-tag" />
                      </div>
                      <div className="text">$100 Rebate With 4</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Purchase a set of four (4) qualifying General Tires and get
                    a $100 Visa® Prepaid Card by mail. This is a manufacturer's
                    rebate and is contingent upon proper completion and
                    submission of …
                    <a href="/specials/tire-specials/general-rebate/">
                      <strong>See Details</strong>
                    </a>
                    <br />
                    <strong>Expires Oct. 31, 2024</strong>
                  </div>
                </div>
                <div className="result-card-collapsible-item">
                  <div className="rcc-header collapsible">
                    <div className="wrapper">
                      <div className="icon blue">
                        <i className="fas fa-info-circle" />
                      </div>
                      <div className="text">More Info</div>
                    </div>
                    <div className="collapse-icon">
                      <div className="collapse-open">
                        <i className="fas fa-plus-circle" />
                      </div>
                      <div className="collapse-close">
                        <i className="fas fa-minus-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="rcc-body">
                    Ranked 2nd by Consumer Reports in the all season truck
                    category.
                    <br />
                    <br />
                    <h6>Benefits:</h6>
                    <ul>
                      <li>
                        Ranked Very Good by Consumer Reports in noise, rain, and
                        snow traction
                      </li>
                      <li>65,000 mile warranty for S &amp; T rated tires</li>
                      <li>Great for SUVs and light-duty pickups</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="price-info">
                <div className="compare-box"></div>
                <div className="price-container">
                  <div className="tight-row">
                    <form
                      hx-post="/cart/add-tire/"
                      hx-target="body"
                      hx-swap="afterbegin"
                      onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                      />
                      <input type="hidden" name="tire_id" defaultValue={3016} />
                    
                    </form>
                    <div
                      className="map-info"
                      hx-get="/tires/map-info-modal/"
                      hx-target="body"
                      hx-swap="afterbegin"
                    >
                      <i className="fas fa-question-circle" />
                    </div>
                  </div>
                  <p className="qty">11 Available</p>
                </div>
                <div className="cart-button-container">
                  <form
                    hx-post="/cart/add-tire/"
                    hx-target="body"
                    hx-swap="afterbegin"
                    onclick="loadingGifsOn(ids=['#catalog-full-page-loading-gif']);"
                  >
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      defaultValue="1yRfnjuVEriI1MWrsvhQhILTnleLykhExE99UaeTNNicjXRTnBVXLRnzFUHQHI8E"
                    />
                    <input type="hidden" name="tire_id" defaultValue={3016} />
                    <input
                      type="submit"
                      className="btn btn-orange add-to-cart"
                      defaultValue="Add to Cart"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="monthly-payments-disclaimer">
          *Monthly payment amounts are an estimate only, based on six (6) months
          of Interest Free Financing. Estimated payments do not include tax.
          Final payment amounts and terms will be dictated by lender. Financing
          is subject to credit approval. Actual terms may vary. See store for
          details.
        </p>
      </div>
    </div>
   
  </div>
</div>
 
    </>
  )
}

export default Catalog