import { BarChart, ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import axios from "axios"; // Import Axios

const Header = () => {
  const navigate = useNavigate();
  const [mobileDisplay, setMobileDisplay] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // For handling open dropdowns in mobile
  const [services, setServices] = useState([]); // State to store services

  function toggleMobileMenuDisplay() {
    setMobileDisplay(!mobileDisplay);
  }

  function closeSidebar() {
    setMobileDisplay(false);
  }

  function toggleSubmenu(menu) {
    if (openSubmenu === menu) {
      setOpenSubmenu(null); // Close the currently open menu
    } else {
      setOpenSubmenu(menu); // Open a new submenu
    }
  }

  useEffect(() => {
    // Fetch services from the API
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/services"
        );
        setServices(response.data); // Update services state with API response
      } catch (error) {
        console.error("Error fetching services:", error); // Handle error
      }
    };

    fetchServices();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
      <div className="above-site-header">
        The Home of Wholesale Tire Pricing
      </div>
      <div className="site-header">
        <div className="site-header-logo-box">
          <Link to="/">
            <img className="site-header-logo" src={logo} alt="Tires Etc" />
          </Link>
        </div>
        <div className="site-header-nav">
          <div>
            <Link to="/">Tires</Link>
            <div className="site-header-sub-menu">
              <Link to="/search-by-vehicle/">Search by Vehicle</Link>
              <Link to="/search-by-size/">Search by Size</Link>
            </div>
          </div>
          <div>
            <Link to="/service/">Services</Link>
            <div className="site-header-sub-menu">
              <Link to="/service/">All Services</Link>
              {services.map((service) => (
                <Link key={service.id} to={`/services/${service.id}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Link to="/specials/">Specials</Link>
            <div className="site-header-sub-menu">
              <Link to="/specials/tire-specials/">Tire Specials</Link>
              <Link to="/specials/service-specials/">Service Specials</Link>
              <Link to="/specials/interest-fee">Interest Free Financing</Link>
            </div>
          </div>
          <div>
            <Link to="/faqs">FAQs</Link>
          </div>
          <div>
            <Link to="/testimonials">Testimonials</Link>
          </div>
          <div>
            <Link to="/about-us">About</Link>
          </div>
          <div className="site-header-sub-menu">
            <Link to="/contact-us">Contact</Link>
          </div>
        </div>

        <div className="site-header-right-container">
          <div className="site-header-right-column">
            <div className="site-header-right-row">
              <div className="site-header-cart-icon"></div>
            </div>
            <div className="site-header-account-block">
              <div className="site-header-right-row">
                <button
                  onClick={() => navigate("/appointment")}
                  style={{
                    backgroundColor: "#f47121",
                    color: "white",
                    borderRadius: "5px",
                    padding: "10px 20px",
                  }}
                >
                  Get Appointments
                </button>
              </div>

              {/* if asked about the login and signup then will provide please */}

              {/* <div className="site-header-account-sub-panel">
                <p className="size-down">
                  <em>Not signed in</em>
                </p>
                <p>
                  <Link to="/login">Sign In</Link> &nbsp;|&nbsp;
                  <Link to="/create-account">Register</Link>
                </p>
              </div> */}
            </div>
          </div>

          <div className="site-header-right-mobile">
            <button onClick={toggleMobileMenuDisplay}>
              <BarChart color="red" />
            </button>
          </div>
        </div>
      </div>

      {mobileDisplay && (
        <>
          <div className="wrapper">
            <nav id="sidebar" className={mobileDisplay ? "active" : ""}>
              <div id="dismiss" onClick={closeSidebar}>
                <i className="glyphicon glyphicon-arrow-left"></i>
              </div>

              <Link to="/">
                <img
                  src={logo}
                  alt="Tires Etc"
                  style={{ width: "250px", height: "160px" }}
                />
              </Link>

              <ul className="list-unstyled components">
                <li>
                  <Link to="/" onClick={closeSidebar}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={() => toggleSubmenu("services")}>
                    Services
                  </Link>
                  {openSubmenu === "services" && (
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/service/" onClick={closeSidebar}>
                          All Services
                        </Link>
                      </li>
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            to={`/services/${service.id}`}
                            onClick={closeSidebar}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link onClick={() => toggleSubmenu("specials")}>
                    Specials
                  </Link>
                  {openSubmenu === "specials" && (
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          to="/specials/tire-specials/"
                          onClick={closeSidebar}
                        >
                          Tire Specials
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/specials/service-specials/"
                          onClick={closeSidebar}
                        >
                          Service Specials
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/specials/interest-fee"
                          onClick={closeSidebar}
                        >
                          Interest Free Financing
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/about-us" onClick={closeSidebar}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={closeSidebar}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="site-header-account-block">
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => navigate("/appointment")}
                    style={{
                      backgroundColor: "#f47121",
                      color: "white",
                      borderRadius: "5px",
                      padding: "10px 20px",
                    }}
                  >
                    Get Appointments
                  </button>
                </div>
              </div>
            </nav>

            <div className="overlay" onClick={closeSidebar}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
