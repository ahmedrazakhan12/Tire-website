import React, { useEffect, useState } from "react";
import BankCard from "../assets/images/bank-card.png";
import BankCard2 from "../assets/images/bank-card2.png";
import SnapCard from "../assets/images/snap-logo.png";
import TireImage from "../assets/images/tire.png";
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
  const [activeYear, setActiveYear] = useState("");
  const [activeMake, setActiveMake] = useState("");

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

  const data ={
    offerImage: TireImage,
    heading : "GET A $100 REBATE*",
    subheading : "WHEN YOU PURCHASE A SET OF FOUR (4) QUALIFYING GENERAL TIRES",
    buttonText : "LEARN HOW",
    offerValid : "OFFER VALID: 9/1 - 10/31/24",
    termsText : "*See terms for details",
    imageSrc : "TireImage",
    imageAlt : "Tire"
  }
  

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
                {/* <Carousel.Item>
                    <a href="/specials/tire-specials/general-rebate/">
                      <img
                        className="d-block w-100"
                        src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-09-01-general-rebate-list-image.webp"
                        alt="General: $100 Rebate"
                      />
                    </a>
                  </Carousel.Item> */}
                  <Carousel.Item>
                    {/* <a href="/specials/tire-specials/general-rebate/">
                      <img
                        className="d-block w-100"
                        src="https://tiresetc-media-files.s3.amazonaws.com/images/specials/2024-09-01-general-rebate-list-image.webp"
                        alt="General: $100 Rebate"
                      />
                    </a> */}
                    
                    <div
  className="position-relative mx-auto bg-dark text-white rounded-lg overflow-hidden"
  style={{ height: "270px" }}
>
  <div
    className="position-absolute"
    style={{   opacity: "0.2", height: "100px" }}
  />
  <div className="position-relative z-10">
    <div className="py-2 px-4 my-clip" style={{ background: "#a7192e" }}>
      <p className="text-center font-weight-bold pb-3 bebas-neue-regular"></p>
    </div>
    <div className="px-5 py-4">
      <h3 className="text-center font-weight-bold pb-2 bebas-neue-regular" style={{ borderBottom: "1px solid #a7192e" }}>
        {data.heading}
      </h3>
      <p className="lead text-center font-bold" style={{ fontSize: "13px" }}>
        {data.subheading}
      </p>
      <button
        className="btn btn-danger my-custom-btn-hover btn-lg font-weight-semibold mx-4"
        style={{ borderRadius: "0", background: "#a7192e", position: "absolute", right: "10px" }}
      >
        {data.buttonText}
      </button>
      <br />
      <br />
      <p className="small bebas-neue-regular ml-3" style={{ float: "right", fontSize: "12px", marginRight: "-25px" }}>
        {data.offerValid}
      </p>
      <p className="text-muted small bebas-neue-regular ml-3" style={{ float: "right", fontSize: "12px", marginRight: "-25px" }}>
        {data.termsText}
      </p>
    </div>
  </div>

  <div className="position-absolute bottom-0 start-0" style={{ width: "33%" }}>
    <img
      src={data.offerImage}
      alt={""}
      className="img-fluid"
      style={{ height: "100px", width: "300px" }}
    />
  </div>
</div>
    


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
                    required
                    onChange={(e) => {
                      setYear(e.target.value);
                      setActiveYear(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setMake(e.target.value);
                      setActiveMake(e.target.value);
                    }}
                    required
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
                    required
                  >
                    <option value="" disabled>
                      Model
                    </option>
                    {activeMake === "Acura" && (
                      <>
                        <option value="Integra">Integra</option>
                        <option value="MDX">MDX</option>
                        <option value="RDX">RDX</option>
                        <option value="TLX">TLX</option>
                      </>
                    )}
                    {activeMake === "Aston Martin" && (
                      <>
                        <option value="DB11">DB12</option>
                        <option value="DBS">DBX707</option>
                        <option value="Vantage">Vantage</option>
                      </>
                    )}
                    {activeMake === "Audi" && (
                      <>
                        <option value="A3 Quattro">A3 Quattro</option>
                        <option value="A4 Quattro">A4 Quattro</option>
                        <option value="A4 allroad">A4 allroad</option>
                        <option value="A5 Sportback">A5 Sportback</option>
                        <option value="A6 Quattro">A6 Quattro</option>
                        <option value="A6 allroad">A6 allroad</option>
                        <option value="A7 Sportback">A7 Sportback</option>
                        <option value="Q7">Q7</option>
                        <option value="Q8">Q8</option>
                        <option value="RS5 Sportback">RS5 Sportback</option>
                        <option value="RS6 Avant">RS6 Avant</option>
                        <option value="S3">S3</option>
                        <option value="S4">S4</option>
                        <option value="S5 Sportback">S5 Sportback</option>
                        <option value="S6">S6</option>
                        <option value="S7 Sportback">S7 Sportback</option>
                        <option value="SQ7">SQ7</option>
                        <option value="SQ8">SQ8</option>
                      </>
                    )}
                    {activeMake === "BMW" && (
                      <>
                        <option value="230i">230i</option>
                        <option value="230i xDrive">230i xDrive</option>
                        <option value="330i">330i</option>
                        <option value="330i x3rive">230i xDrive</option>
                        <option value="430i">430i</option>
                        <option value="430i gran Coupe">430i gran Coupe</option>
                        <option value="530i">530i</option>
                        <option value="530i xDrive">530i xDrive</option>
                        <option value="540i xDrive">540i xDrive</option>
                        <option value="550i xDrive">550i xDrive</option>
                        <option value="740i">740i</option>
                        <option value="740i xDrive">740i xDrive</option>
                      </>
                    )}
                    {activeMake === "Buick" && (
                      <>
                        <option value="Enclave">Enclave</option>
                        <option value="Encore GX">Encore GX</option>
                        <option value="Envista">Envista</option>
                      </>
                    )}
                    {activeMake === "Cadillac" && (
                      <>
                        <option value="CTA4">CTA4</option>
                        <option value="CT5">CT5</option>
                        <option value="XT4">XT4</option>
                        <option value="XT5">XT5</option>
                        <option value="XT6">XT6</option>
                      </>
                    )}
                    {activeMake === "Chevrolet" && (
                      <>
                        <option value="Blazer">Blazer</option>
                        <option value="Equinox">Equinox</option>
                        <option value="Suburban">Suburban</option>
                        <option value="Tahoe">Tahoe</option>
                        <option value="Traverse">Traverse</option>
                        <option value="Trax">Trax</option>
                      </>
                    )}
                    {activeMake === "Chrysler" && (
                      <>
                        <option value="Pacifica">Pacifica</option>
                        <option value="Voyager">Voyager</option>
                      </>
                    )}
                    {activeMake === "Dodge" && (
                      <>
                        <option value="Charger">Charger</option>
                        <option value="Durango">Durango</option>
                        <option value="Grand Caravan">Grand Caravan</option>
                        <option value="Journey">Journey</option>
                      </>
                    )}
                    {activeMake === "Ford" && (
                      <>
                        <option value="Bronco">Bronco</option>
                        <option value="EcoSport">EcoSport</option>
                        <option value="Edge">Edge</option>
                        <option value="Escape">Escape</option>
                        <option value="Expedition">Expedition</option>
                        <option value="Explorer">Explorer</option>
                        <option value="F-150">F-150</option>
                        <option value="F-250">F-250</option>
                        <option value="F-350">F-350</option>
                        <option value="Fusion">Fusion</option>
                        <option value="Mustang">Mustang</option>
                        <option value="Ranger">Ranger</option>
                      </>
                    )}
                    {activeMake === "GMC" && (
                      <>
                        <option value="Acadia">Acadia</option>
                        <option value="Canyon">Canyon</option>
                        <option value="Sierra 1500">Sierra 1500</option>
                        <option value="Sierra 2500 HD">Sierra 2500 HD</option>
                        <option value="Terrain">Terrain</option>
                        <option value="Yukon">Yukon</option>
                      </>
                    )}
                    {activeMake === "Honda" && (
                      <>
                        <option value="Accord">Accord</option>
                        <option value="Civic">Civic</option>
                        <option value="CR-V">CR-V</option>
                        <option value="HR-V">HR-V</option>
                        <option value="Odyssey">Odyssey</option>
                        <option value="Pilot">Pilot</option>
                        <option value="Ridgeline">Ridgeline</option>
                      </>
                    )}
                    {activeMake === "Hyundai" && (
                      <>
                        <option value="Accent">Accent</option>
                        <option value="Elantra">Elantra</option>
                        <option value="Kona">Kona</option>
                        <option value="Palisade">Palisade</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Sonata">Sonata</option>
                        <option value="Tucson">Tucson</option>
                        <option value="Venue">Venue</option>
                      </>
                    )}
                    {activeMake === "Infiniti" && (
                      <>
                        <option value="Q50">Q50</option>
                        <option value="Q60">Q60</option>
                        <option value="QX50">QX50</option>
                        <option value="QX60">QX60</option>
                        <option value="QX80">QX80</option>
                      </>
                    )}
                    {activeMake === "Jaguar" && (
                      <>
                        <option value="E-Pace">E-Pace</option>
                        <option value="F-Pace">F-Pace</option>
                        <option value="I-Pace">I-Pace</option>
                        <option value="XE">XE</option>
                        <option value="XF">XF</option>
                        <option value="XJ">XJ</option>
                      </>
                    )}
                    {activeMake === "Jeep" && (
                      <>
                        <option value="Cherokee">Cherokee</option>
                        <option value="Compass">Compass</option>
                        <option value="Gladiator">Gladiator</option>
                        <option value="Grand Cherokee">Grand Cherokee</option>
                        <option value="Renegade">Renegade</option>
                        <option value="Wrangler">Wrangler</option>
                      </>
                    )}
                    {activeMake === "Kia" && (
                      <>
                        <option value="Forte">Forte</option>
                        <option value="K5">K5</option>
                        <option value="Niro">Niro</option>
                        <option value="Seltos">Seltos</option>
                        <option value="Sorento">Sorento</option>
                        <option value="Soul">Soul</option>
                        <option value="Sportage">Sportage</option>
                        <option value="Stinger">Stinger</option>
                      </>
                    )}
                    {activeMake === "Land Rover" && (
                      <>
                        <option value="Defender">Defender</option>
                        <option value="Discovery">Discovery</option>
                        <option value="Discovery Sport">Discovery Sport</option>
                        <option value="Range Rover">Range Rover</option>
                        <option value="Range Rover Evoque">
                          Range Rover Evoque
                        </option>
                        <option value="Range Rover Sport">
                          Range Rover Sport
                        </option>
                        <option value="Range Rover Velar">
                          Range Rover Velar
                        </option>
                      </>
                    )}
                    {activeMake === "Lexus" && (
                      <>
                        <option value="ES 350">ES 350</option>
                        <option value="GX 460">GX 460</option>
                        <option value="IS 300">IS 300</option>
                        <option value="LS 500">LS 500</option>
                        <option value="NX 300">NX 300</option>
                        <option value="RX 350">RX 350</option>
                        <option value="RX 450h">RX 450h</option>
                        <option value="UX 200">UX 200</option>
                      </>
                    )}
                    {activeMake === "Lincoln" && (
                      <>
                        <option value="Aviator">Aviator</option>
                        <option value="Corsair">Corsair</option>
                        <option value="Nautilus">Nautilus</option>
                        <option value="Navigator">Navigator</option>
                      </>
                    )}
                    {activeMake === "Mazda" && (
                      <>
                        <option value="CX-30">CX-30</option>
                        <option value="CX-5">CX-5</option>
                        <option value="CX-9">CX-9</option>
                        <option value="Mazda3">Mazda3</option>
                        <option value="Mazda6">Mazda6</option>
                      </>
                    )}
                    {activeMake === "Mercedes-Benz" && (
                      <>
                        <option value="A 220">A 220</option>
                        <option value="C 300">C 300</option>
                        <option value="E 350">E 350</option>
                        <option value="GLA 250">GLA 250</option>
                        <option value="GLB 250">GLB 250</option>
                        <option value="GLC 300">GLC 300</option>
                        <option value="GLE 350">GLE 350</option>
                        <option value="GLS 450">GLS 450</option>
                        <option value="S 450">S 450</option>
                      </>
                    )}
                    {activeMake === "Mini" && (
                      <>
                        <option value="Cooper">Cooper</option>
                        <option value="Countryman">Countryman</option>
                        <option value="Hardtop 2 Door">Hardtop 2 Door</option>
                        <option value="Hardtop 4 Door">Hardtop 4 Door</option>
                      </>
                    )}
                    {activeMake === "Mitsubishi" && (
                      <>
                        <option value="Eclipse Cross">Eclipse Cross</option>
                        <option value="Outlander">Outlander</option>
                        <option value="Outlander Sport">Outlander Sport</option>
                      </>
                    )}
                    {activeMake === "Nissan" && (
                      <>
                        <option value="Altima">Altima</option>
                        <option value="Kicks">Kicks</option>
                        <option value="Murano">Murano</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Sentra">Sentra</option>
                        <option value="Titan">Titan</option>
                      </>
                    )}
                    {activeMake === "Porsche" && (
                      <>
                        <option value="Cayenne">Cayenne</option>
                        <option value="Macan">Macan</option>
                        <option value="Panamera">Panamera</option>
                      </>
                    )}
                    {activeMake === "Ram" && (
                      <>
                        <option value="1500">1500</option>
                        <option value="2500">2500</option>
                        <option value="3500">3500</option>
                      </>
                    )}
                    {activeMake === "Subaru" && (
                      <>
                        <option value="Ascent">Ascent</option>
                        <option value="Crosstrek">Crosstrek</option>
                        <option value="Forester">Forester</option>
                        <option value="Impreza">Impreza</option>
                        <option value="Legacy">Legacy</option>
                        <option value="Outback">Outback</option>
                      </>
                    )}
                    {activeMake === "Toyota" && (
                      <>
                        <option value="4Runner">4Runner</option>
                        <option value="Camry">Camry</option>
                        <option value="Corolla">Corolla</option>
                        <option value="Highlander">Highlander</option>
                        <option value="RAV4">RAV4</option>
                        <option value="Sienna">Sienna</option>
                        <option value="Tacoma">Tacoma</option>
                        <option value="Tundra">Tundra</option>
                      </>
                    )}
                    {activeMake === "Volkswagen" && (
                      <>
                        <option value="Atlas">Atlas</option>
                        <option value="Golf GTI">Golf GTI</option>
                        <option value="Jetta">Jetta</option>
                        <option value="Passat">Passat</option>
                        <option value="Tiguan">Tiguan</option>
                      </>
                    )}
                    {activeMake === "Volvo" && (
                      <>
                        <option value="S60">S60</option>
                        <option value="S90">S90</option>
                        <option value="V60">V60</option>
                        <option value="V90">V90</option>
                        <option value="XC40">XC40</option>
                        <option value="XC60">XC60</option>
                        <option value="XC90">XC90</option>
                      </>
                    )}
                    {activeMake === "Tesla" && (
                      <>
                        <option value="Model 3">Model 3</option>
                        <option value="Model S">Model S</option>
                        <option value="Model X">Model X</option>
                        <option value="Model Y">Model Y</option>
                      </>
                    )}
                    {activeMake === "Land Rover" && (
                      <>
                        <option value="Defender">Defender</option>
                        <option value="Discovery">Discovery</option>
                        <option value="Discovery Sport">Discovery Sport</option>
                        <option value="Range Rover">Range Rover</option>
                        <option value="Range Rover Evoque">
                          Range Rover Evoque
                        </option>
                        <option value="Range Rover Sport">
                          Range Rover Sport
                        </option>
                        <option value="Range Rover Velar">
                          Range Rover Velar
                        </option>
                      </>
                    )}
                  </select>
                  <select
                    className="form-select"
                    aria-label="Trim"
                    value={trim}
                    onChange={(e) => setTrim(e.target.value)}
                    required
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
                Each service listed below includes a trust badge that assures
                quality, customer satisfaction, or other certifications to
                enhance credibility.
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
                Booking is just a click away. Schedule your service online,
                easily and conveniently.
              </p>
              {/* <p className="small-print">
                *Same-Day Service only available until shop reaches booking
                capacity for the day. Please call ahead to confirm availability.
              </p> */}
            </div>
          </div>
        </div>
        <div className="middle-content">
          <div className="amenity-row">
            <div className="amenity">
              <img src={ArmChair} alt="" className="color-image" />
              <div>
                <h5>After Hours Drop Box</h5>
                <p>Securely drop your vehicle off any time, 24 hours a day.</p>
              </div>
            </div>
            <div className="amenity">
              <img src={Lockbox} alt="" className="color-image" />
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
              <img src={TaxiImage} alt="" className="color-image" />
              <div>
                <h5>Comfortable Amenities</h5>
                <p>
                  WiFi. Outlets. Comfortable chairs. Complimentary beverages. If
                  you need to wait, at least be comfortable!
                </p>
              </div>
            </div>
            <div className="amenity">
              <img src={TodayImage} alt="" className="color-image" />
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
                    style={{ color: "#ee2424", height: "20px", width: "20px" }}
                  />
                  <span
                    className="address text-left "
                    style={{
                      textAlign: "left",
                      marginTop: "20px",
                      fontWeight: "800",
                      color: "#ee2424",
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
                    style={{ color: "#ee2424", height: "20px", width: "20px" }}
                  />{" "} */}
                  {/* <span
                    className="address text-left "
                    style={{
                      textAlign: "left",
                      marginTop: "20px",
                      fontWeight: "800",
                      fontSize: "15px",
                      color: "#ee2424",
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
                backgroundColor: "#ee2424",
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
                backgroundColor: "#ee2424",
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
