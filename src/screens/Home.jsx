import React, { useEffect, useState } from "react";
import BankCard from "../assets/images/bank-card.png";
import BankCard2 from "../assets/images/bank-card2.png";
import SnapCard from "../assets/images/snap-logo.png";
import {
  CalendarRangeIcon,
  MessageSquare,
  MessageSquareText,
  PhoneCallIcon,
} from "lucide-react";
import ArmChair from "../assets/images/armchair.png";
import Lockbox from "../assets/images/lock-box.png";
import TaxiImage from "../assets/images/taxi-icon.png";
import TodayImage from "../assets/images/today.png";
import Carousel from "react-bootstrap/Carousel";
import V4 from "../assets/v4.mp4";
import location from "../assets/images/imj9.jpg";

import "../App.css";
import { toast } from "react-toastify";
import axios from "axios";
const Home = () => {
  const [tabs, setTabs] = useState("vehicle");

  // State variables to hold the selected values
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");

  // State to hold model data fetched from the API
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [services, setServices] = useState([]); // State to store services

  // Fetch services from the API when component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/services"
        );
        console.log(response);
        setServices(response.data); // Store API response in state
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []); // Empty dependency array to run effect only on mount

  // Fetch models from API
  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/models"
        );
        setModels(response.data); // Update state with model data
      } catch (error) {
        console.error("Error fetching models:", error);
        toast.error("Failed to load models.");
      }
    };

    const fetchYears = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/years"
        );
        console.log("response", response);
        setYears(response.data);
      } catch (error) {
        console.error("Error fetching years:", error);
        toast.error("Failed to load years.");
      }
    };

    fetchModels();
    fetchYears();
  }, []);

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Check if all selects have valid values
    if (year && make && model && trim) {
      // If all fields are selected, navigate to the desired URL
      window.location.href = "/tires/catalog";
    } else {
      // Optionally, alert the user or display a message
      toast.error("Please select all options before proceeding.");
      // alert('Please select all options before proceeding.');
    }
  };

  return (
    <>
      <div className=" wrapper">
        {/* Hero */}
        <div className="hero home-hero my-custom-heigh">
          <video
            style={{ objectPosition: "center", objectFit: "cover" }}
            autoPlay
            muted
            loop
            id="background-video"
            src={V4}
          ></video>
          <div className="home-hero-content">
            <div className="home-hero-col">
              <div
                className="tire-specials-carousel "
                style={{ overflow: "hidden", width: "400px" }}
              >
                <Carousel indicators={false} nextLabel="dsad" prevLabel="">
                  <Carousel.Item>
                    <a href="/specials/tire-specials/general-rebate/">
                      <img
                        className="d-block w-100"
                        src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-09-01-general-rebate-list-image.webp"
                        alt="General: $100 Rebate"
                      />
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a href="/specials/tire-specials/free-installation-on-select-brands/">
                      <img
                        className="d-block w-100"
                        src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/free-installation-select-brands-list-image.jpg"
                        alt="Free Installation on Select Brands"
                      />
                    </a>
                  </Carousel.Item>
                </Carousel>

                <div
                  className="bg-red"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a
                    href="/specials/tire-specials/"
                    style={{ textAlign: "center", fontWeight: "700" }}
                  >
                    See All Tire Specials{" "}
                    <i className="fas fa-angle-double-right" />
                  </a>
                </div>
                <div className="mt-4">
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
                      <p
                        className="details d-flex"
                        style={{ marginTop: "-10px" }}
                      >
                        Certain restrictions apply.{" "}
                        <u className="cursor-pointer"> Click for details</u>
                      </p>
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
              </div>
            </div>
            <div className="form-container">
              <div className="form-title">SHOP TIRES</div>
              <ul
                className="nav nav-tabs mb-3 w-100"
                style={{ fontSize: "20px" }}
              >
                <li className="nav-item flex-fill">
                  <a
                    className={`nav-link ${tabs === "vehicle" ? "active" : ""}`}
                    onClick={() => setTabs("vehicle")}
                  >
                    Vehicle
                  </a>
                </li>
                <li
                  className="nav-item flex-fill"
                  onClick={() => setTabs("size")}
                >
                  <a
                    className={`nav-link  ${tabs === "size" ? "active" : ""}`}
                    href="#"
                  >
                    Size
                  </a>
                </li>
                <li
                  className="nav-item flex-fill"
                  onClick={() => setTabs("brand")}
                >
                  <a
                    className={`nav-link  ${tabs === "brand" ? "active" : ""}`}
                    href="#"
                  >
                    Brand
                  </a>
                </li>
              </ul>
              {tabs === "vehicle" && (
                <form onSubmit={handleSubmit}>
                  <select
                    className="form-select"
                    aria-label="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {[...Array(2025 - 1980).keys()].map((_, index) => (
                      <option key={index} value={2025 - index}>
                        {2025 - index}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select"
                    aria-label="Make"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                  >
                    <option value="" disabled>
                      Make
                    </option>
                    <option value="Alfa Romeo">Alfa Romeo</option>
                    <option value="American Motors">American Motors</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Buick">Buick</option>
                    <option value="Cadillac">Cadillac</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Chrysler">Chrysler</option>
                    <option value="Dodge">Dodge</option>
                    <option value="Eagle">Eagle</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Ford">Ford</option>
                    <option value="Geo">Geo</option>
                    <option value="GMC">GMC</option>
                    <option value="Honda">Honda</option>
                    <option value="Aston Martin">Aston Martin</option>
                    <option value="Bentley">Bentley</option>
                    <option value="Checker">Checker</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="International">International</option>
                    <option value="Jaguar">Jaguar</option>
                    <option value="Jeep">Jeep</option>
                    <option value="Lamborghini">Lamborghini</option>
                    <option value="Land Rover">Land Rover</option>
                    <option value="Lexus">Lexus</option>
                    <option value="Lincoln">Lincoln</option>
                    <option value="Lotus">Lotus</option>
                    <option value="Maserati">Maserati</option>
                  </select>

                  <select
                    className="form-select"
                    aria-label="Model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  >
                    <option value="" disabled>
                      Model
                    </option>
                    {models.map((modelItem) => (
                      <option key={modelItem.id} value={modelItem.modele}>
                        {modelItem.modele}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select"
                    aria-label="Trim"
                    value={trim}
                    onChange={(e) => setTrim(e.target.value)}
                  >
                    <option value="" disabled>
                      Trim
                    </option>

                    <option value="Trim1">Trim 1</option>
                    <option value="Trim2">Trim 2</option>
                  </select>

                  <button type="submit" className="btn btn-shop">
                    <span className="w-6" style={{ color: "white" }}>
                      SHOP TIRES & BOOK APPOINTMENT
                    </span>
                  </button>
                </form>
              )}

              {tabs === "size" && (
                <form>
                  <select className="form-select" aria-label="Year">
                    <option selected>size</option>
                    <option value={145}>145</option>
                    <option value={155}>155</option>
                    <option value={165}>165</option>
                    <option value={175}>175</option>
                    <option value={185}>185</option>
                    <option value={195}>195</option>
                    <option value={205}>205</option>
                    <option value={215}>215</option>
                    <option value={225}>225</option>
                    <option value={235}>235</option>
                    <option value={245}>245</option>
                    <option value={255}>255</option>
                    <option value={265}>265</option>
                    <option value={275}>275</option>
                    <option value={285}>285</option>
                    <option value={295}>295</option>
                    <option value={305}>305</option>
                    <option value={315}>315</option>
                    <option value="317.5">317.5</option>
                    <option value={325}>325</option>
                    <option value={335}>335</option>
                    <option value="8.75">8.75</option>
                    <option value="9.50">9.50</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                    <option value={32}>32</option>
                    <option value={33}>33</option>
                    <option value={34}>34</option>
                    <option value={35}>35</option>
                    <option value={37}>37</option>
                    <option value={38}>38</option>
                  </select>
                  <select className="form-select" aria-label="Make">
                    <option selected>Ratio</option>
                  </select>
                  <select className="form-select" aria-label="Model">
                    <option selected>Rim</option>
                  </select>
                  <button
                    type="submit"
                    className="btn btn-shop"
                    style={{ color: "white" }}
                  >
                    <span className=" w-6">SHOP TIRES & BOOK APPOINTMENT</span>
                  </button>
                </form>
              )}
              {tabs === "brand" && (
                <>
                  <button
                    type="submit"
                    className="btn btn-shop"
                    style={{ color: "white" }}
                  >
                    <span className=" w-6">Shop By Brand</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Brand Strip */}
        <div className="middle-content">
          <div className="brand-strip">
            <a href="/tires/brands/Continental/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/Continental.png"
                alt="Continental logo"
              />
            </a>
            <a href="/tires/brands/General/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/General.png"
                alt="General logo"
              />
            </a>
            <a href="/tires/brands/Goodyear/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/Goodyear.png"
                alt="Goodyear logo"
              />
            </a>
            <a href="/tires/brands/Bridgestone/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/Bridgestone.png"
                alt="Bridgestone logo"
              />
            </a>
            <a href="/tires/brands/Firestone/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/Firestone.png"
                alt="Firestone logo"
              />
            </a>
            <a href="/tires/brands/Michelin/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/Michelin.png"
                alt="Michelin logo"
              />
            </a>
            <a href="/tires/brands/Pirelli/">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/tire_brand_logos/Pirelli.png"
                alt="Pirelli logo"
              />
            </a>
            <a href="/tires/search-by/brand/">
              <button className="btn btn-primary btn-small">
                ...and More!{" "}
                <span>
                  <i className="fas fa-arrow-right" />
                </span>
              </button>
            </a>
          </div>
        </div>
        {/* Services */}
        <div className="homepage-content-header">
          <div className="content-header-text">
            <div>
              <h2 style={{ fontWeight: "700" }}>
                Did You Know We Are a Full Service Shop?
              </h2>
              <p>
                We don't just have the best tire prices in the Greater
                Philadelphia Area, we are also a full-service automotive
                maintenance and repair destination, with Master Techs on staff
                in every store!
              </p>
            </div>
          </div>
        </div>
        <div className="middle-content">
          <div className="homepage-services-wrapper">
            {services.map((service) => (
              <a href={`/services/${service.id}`} key={service.id}>
                <div className="service-list-item">
                  <img
                    src={`https://tirealigners.com/admin/public/${service.icon}`}
                    alt={service.title}
                  />
                  <h5>{service.title}</h5>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Amenities */}
        <div className="homepage-content-header">
          <div className="content-header-text">
            <div>
              <h2 style={{ fontWeight: "700" }}>
                Flexibility For Your Convenience
              </h2>
              <p>
                Appointment or Same-Day Service*. Drop-off or wait. We take your
                time seriously, and we'll always do our best to work around the
                demands of your busy schedule.
              </p>
              <p className="small-print">
                *Same-Day Service only available until shop reaches booking
                capacity for the day. Please call ahead to confirm availability.
              </p>
            </div>
          </div>
        </div>
        <div className="middle-content">
          <div className="amenity-row">
            <div className="amenity">
              <img src={ArmChair} alt="" className="color-image"/>
              <div>
                <h5>After Hours Drop Box</h5>
                <p>Securely drop your vehicle off any time, 24 hours a day.</p>
              </div>
            </div>
            <div className="amenity">
              <img src={Lockbox} alt="" className="color-image"/>
              <div>
                <h5>Complimentary Lyft Ride</h5>
                <p>
                  You may be eligible for a complimentary Lyft ride to or from
                  home or work.
                </p>
                <p className="small-print">
                  *Restrictions apply. Call store for details.
                </p>
              </div>
            </div>
          </div>
          <div className="amenity-row">
            <div className="amenity">
              <img src={TaxiImage} alt="" className="color-image"/>
              <div>
                <h5>Comfortable Amenities</h5>
                <p>
                  WiFi. Outlets. Comfortable chairs. Complimentary beverages. If
                  you need to wait, at least be comfortable!
                </p>
              </div>
            </div>
            <div className="amenity">
              <img src={TodayImage} alt="" className="color-image"/>
              <div>
                <h5>Same-Day Service Available</h5>
                <p>
                  We always leave a portion of our schedule open for Same-Day
                  Service.
                </p>
                <p className="small-print">
                  *These spots often book up early, so make sure to call ahead
                  as soon as you can.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Locations */}
        <div className="homepage-content-header">
          <div className="content-header-text">
            <div>
              <h2 style={{ fontWeight: "700" }}> 2 Convenient Locations</h2>
              <p>
                Serving Montgomery, Bucks, Delaware, Chester, and Philadelphia
                Counties!
              </p>
              <p className="margin-top-1">
                <a className="header-font" href="/locations/">
                  Find Location Nearest You &nbsp;
                  <i className="fas fa-angle-double-right" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="locations-wrapper">
          <div className="middle-content row-space-around-wrap">
            <a href="/locations/montgomeryville/">
              <div
                className="location-card"
                style={{ width: "90%", justifyContent: "left" }}
              >
                <img
                  style={{ width: "100%", objectFit: "cover", height: "300px" }}
                  src={location}
                  alt="Montgomeryville Store Image"
                />
                <h4>United States</h4>
                <div
                  style={{
                    textAlign: "left",
                    marginLeft: "20px",
                    fontFamily: "Nunito",
                  }}
                >
                  <CalendarRangeIcon
                    style={{ color: "#f47121", height: "20px", width: "20px" }}
                  />
                  <span
                    className="address text-left "
                    style={{
                      textAlign: "left",
                      marginTop: "20px",
                      fontWeight: "800",
                      color: "#f47121",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    Main Service Center:
                  </span>
                  <p
                    className="address text-left"
                    style={{ textAlign: "left", fontSize: "24px" }}
                  >
                    401 S Dupont Hwy LOT B, New Castle, DE 19720, United States
                  </p>
                  {/* <CalendarRangeIcon
                    style={{ color: "#f47121", height: "20px", width: "20px" }}
                  />{" "} */}
                  {/* <span
                    className="address text-left "
                    style={{
                      textAlign: "left",
                      marginTop: "20px",
                      fontWeight: "800",
                      fontSize: "15px",
                      color: "#f47121",
                    }}
                  >
                    Wilmington Location: :
                  </span>
                  <p
                    className="address text-left"
                    style={{ textAlign: "left", fontSize: "24px" }}
                  >
                    456 Elm Street, Wilmington, Delaware, 19801
                  </p> */}
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="homepage-content-header">
          <div className="content-header-text">
            <div>
              <h2 style={{ fontWeight: "700" }}>Interest Free Financing</h2>
              <p>
                We offer multiple great options to finance your tire or
                automotive repair purchase with zero interest!
              </p>
              <p className="margin-top-1">
                <a className="header-font" href="/financing/">
                  See Details &nbsp;
                  <i className="fas fa-angle-double-right" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="middle-content">
          <div className="cc-images-wrapper">
            <a>
              <img src={BankCard} alt="Goodyear Credit Card image" />
            </a>
            <a href="/financing/#continental-general-credit-card">
              <img
                src={BankCard2}
                alt="Continental/General Credit Card image"
              />
            </a>
            <a href="/financing/#snap-finance">
              <img src={SnapCard} alt="Snap Financing logo" />
            </a>
          </div>
        </div>
        <div className="homepage-content-header">
          <div className="content-header-text">
            <div>
              <h2 style={{ fontWeight: "700" }}>
                Serving You and Your Neighbors
              </h2>
              <p>
                Our friendly, professional staff are always ready to answer your
                questions!
              </p>
            </div>
          </div>
        </div>
        <div className="middle-content">
          <div
            style={{
              marginBottom: "1.5em",
            }}
            className="row-space-around-wrap med-marg-top"
          >
            <p
              style={{
                backgroundColor: "#f47121",
                padding: "10px",
                borderRadius: "15px",
                paddingLeft: "15px",
                paddingRight: "15px",
                marginBottom: "0px",
              }}
              className="large-print header-font pTag"
            >
              <a
                style={{
                  color: "#fff",
                }}
                className="anchorTag"
                href="/locations/"
              >
                <PhoneCallIcon />
                &nbsp; Give Us a Call
              </a>
            </p>
            <p
              style={{
                backgroundColor: "#f47121",
                padding: "10px",
                borderRadius: "15px",
                paddingLeft: "15px",
                paddingRight: "15px",
                marginBottom: "0px",
              }}
              className="large-print header-font pTag"
            >
              <a
                style={{
                  color: "#fff",
                }}
                className="anchorTag"
                href="/contact-us/"
              >
                <MessageSquareText />
                &nbsp; Send Us a Message
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
