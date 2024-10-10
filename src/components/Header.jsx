import { BarChart, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [mobileDisplay, setMobileDisplay] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // For handling open dropdowns in mobile

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

  return (
    <div>
      <div className="above-site-header">
        The Home of Wholesale Tire Pricing
      </div>
      <div className="site-header">
        <div className="site-header-logo-box">
          <Link to="/">
            <img
              className="site-header-logo"
              src={logo}
              alt="Tires Etc"
              style={{
                transform: "translate(20px) scale(2.6)",
                position: "absolute",
              }} // Scale to zoom in
            />
          </Link>
        </div>

        <div className="site-header-nav" style={{ marginLeft: "200px" }}>
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
              <Link to="/service/alignment">Alignments</Link>
              <Link to="/service/oil-change/">Oil Change</Link>
              <Link to="/service/brakes/">Brakes</Link>
              <Link to="/service/mufflers">Mufflers</Link>
              <Link to="/service/rim/">Rim</Link>
              <Link to="/service/suspention">Suspension</Link>
              <Link to="/service/towing/">Towing Service</Link>
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
                    backgroundColor: "#F2184F",
                    color: "white",
                    borderRadius: "5px",
                    padding: "10px 20px",
                  }}
                >
                  Get Appointments
                </button>
              </div>
              <div className="site-header-account-sub-panel">
                <p className="size-down">
                  <em>Not signed in</em>
                </p>
                <p>
                  <Link to="/login">Sign In</Link> &nbsp;|&nbsp;
                  <Link to="/create-account">Register</Link>
                </p>
              </div>
            </div>
          </div>

            <div className="d-flex" style={{display:"flex"}}>
            <div className="site-header-right-mobile">
            <button onClick={toggleMobileMenuDisplay}>
              <BarChart color="red" />
            </button>
            
             </div>
          <div>
          </div>
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
                      <li>
                        <Link to="/service/alignment" onClick={closeSidebar}>
                          Alignments
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/oil-change/" onClick={closeSidebar}>
                          Oil Change
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/brakes/" onClick={closeSidebar}>
                          Brakes
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/mufflers" onClick={closeSidebar}>
                          Mufflers
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/rim/" onClick={closeSidebar}>
                          Rim
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/suspention" onClick={closeSidebar}>
                          Suspension
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/towing/" onClick={closeSidebar}>
                          Towing Service
                        </Link>
                      </li>
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
                      backgroundColor: "#F2184F",
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
