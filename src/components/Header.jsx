import { BarChart, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      <div className="above-site-header">The Home of Wholesale Tire Pricing</div>
      <div className="site-header">
        <div className="site-header-logo-box">
          <Link to="/">
            <img
              className="site-header-logo"
              src="https://tirealigners.com/public/images/logo/logo.png"
              alt="Tires Etc"
              style={{ transform: 'translate(20px) scale(2.6)', position: 'absolute' }} // Scale to zoom in
            />
          </Link>
        </div>

        <div className="site-header-nav" style={{ marginLeft: '200px' }}>
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
              <Link to="/service/suspension">Suspension</Link>
              <Link to="/service/towing/">Towing Service</Link>
            </div>
          </div>

          <div>
            <Link to="/specials/">Specials</Link>
            <div className="site-header-sub-menu">
              <Link to="/specials/tire-specials/">Tire Specials</Link>
              <Link to="/specials/service-specials/">Service Specials</Link>
              <Link to="/specials/interest-free/">Interest Free Financing</Link>
            </div>
          </div>

          <div>
            <Link to="/about-us">About</Link>
            <div className="site-header-sub-menu">
              <Link to="/about-us">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="site-header-right-container">
          <div className="site-header-right-column">
            <div className="site-header-right-row">
              <div className="site-header-cart-icon">
              </div>
            </div>
            <div className="site-header-account-block">
              <div className="site-header-right-row">
                <button
                  onClick={() => navigate('/appointment')}
                  style={{
                    backgroundColor: '#F2184F',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '10px 20px',
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
                  <Link to="/accounts/login/">Sign In</Link> &nbsp;|&nbsp;
                  <Link to="/accounts/signup/">Register</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="site-header-right-mobile">
            <button onClick={toggleMobileMenuDisplay}>
              <BarChart  color='red'/>
            </button>
          </div>
        </div>
      </div>

      {mobileDisplay && (
        <>
          <div className="wrapper">
            <nav id="sidebar" className={mobileDisplay ? 'active' : ''}>
              <div id="dismiss" onClick={closeSidebar}>
                <i className="glyphicon glyphicon-arrow-left"></i>
              </div>

          <Link to="/">
            <img
              src="https://tirealigners.com/public/images/logo/logo.png"
              alt="Tires Etc"
              style={{width:"250px" , height:"160px"}}
            />
          </Link>

              <ul className="list-unstyled components">
                <li>
                  <Link to="/" onClick={closeSidebar}>Home</Link>
                </li>
                <li>
                  <Link onClick={() => toggleSubmenu('services')}>Services</Link>
                  {openSubmenu === 'services' && (
                    <ul className="list-unstyled">
                      <li><Link to="/service/" onClick={closeSidebar}>All Services</Link></li>
                      <li><Link to="/service/alignment" onClick={closeSidebar}>Alignments</Link></li>
                      <li><Link to="/service/oil-change/" onClick={closeSidebar}>Oil Change</Link></li>
                      <li><Link to="/service/brakes/" onClick={closeSidebar}>Brakes</Link></li>
                      <li><Link to="/service/mufflers" onClick={closeSidebar}>Mufflers</Link></li>
                      <li><Link to="/service/rim/" onClick={closeSidebar}>Rim</Link></li>
                      <li><Link to="/service/suspension" onClick={closeSidebar}>Suspension</Link></li>
                      <li><Link to="/service/towing/" onClick={closeSidebar}>Towing Service</Link></li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link onClick={() => toggleSubmenu('specials')}>Specials</Link>
                  {openSubmenu === 'specials' && (
                    <ul className="list-unstyled">
                      <li><Link to="/specials/tire-specials/" onClick={closeSidebar}>Tire Specials</Link></li>
                      <li><Link to="/specials/service-specials/" onClick={closeSidebar}>Service Specials</Link></li>
                      <li><Link to="/specials/interest-free/" onClick={closeSidebar}>Interest Free Financing</Link></li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/about-us" onClick={closeSidebar}>About</Link>
                </li>
              </ul>
              <div className="site-header-account-block">
              <div className="d-flex justify-content-center">
                <button
                  onClick={() => navigate('/appointment')}
                  style={{
                    backgroundColor: '#F2184F',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '10px 20px',
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


 //      <div className="site-header-mobile-menu">
    //      <div className="menu-item">
    //        <div className="sub-menu d-block">
            
    //          <Link to="/">Tires</Link><br/>
    //          <Link to="/tires/search-by/vehicle/">Search by Vehicle</Link><br/>
    //          <Link to="/tires/search-by/size/">Search by Size</Link><br/>
    //          <Link to="/tires/search-by/brand/">Search by Brand</Link><br/>
    //        </div>
    //      </div>
 
       
 
    //      <Link to="/service/">Services</Link><br/>
    //         <div className="sub-menu">
    //           <Link to="/service/">All Services</Link><br/>
    //           <Link to="/service/alignment">Alignments</Link><br/>
    //           <Link to="/service/oil-change/">Oil Change</Link><br/>
    //           <Link to="/service/brakes/">Brakes</Link><br/>
    //           <Link to="/service/mufflers">Mufflers</Link><br/>
    //           <Link to="/service/rim/">Rim</Link><br/>
    //           <Link to="/service/suspension">Suspension</Link><br/>
    //           <Link to="/service/towing/">Towing Service</Link><br/>
    //         </div>   
      
    //      <div className="menu-item">
    //        Specials
    //        <div className="sub-menu">
    //          <Link to="/specials/tire-specials/">Tire Specials</Link>
    //          <Link to="/specials/service-specials/">Service Specials</Link>
    //          <Link to="/financing/">Interest Free Financing</Link>
    //        </div>
    //      </div>
 
    //      <div className="menu-item">
    //        About
    //        <div className="sub-menu">
    //          <Link to="/contact-us/">Contact Us</Link>
    //        </div>
    //      </div>
 
       
    //    </div>
// import { ShoppingCart, User2 } from 'lucide-react'
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Header = () => {
//     const navigate = useNavigate();
//     function toggleMobileMenuDisplay() {
//         const mobileMenu = document.getElementById('mobile-nav');
//         mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
//       }
      
//     return (
//     <div>
//           <div className="above-site-header">The Home of Wholesale Tire Pricing</div>
//     <div className="site-header">
//       <div className="site-header-logo-box">
//         <a href="/">
//           <img
//             className="site-header-logo"
//             src="https://tirealigners.com/public/images/logo/logo.png"
//             style={{ transform: "translate(20px) scale(2.6)" ,position:'absolute' }}  // scale to zoom in (1.2 = 20% zoom)
//             alt="Tires Etc"
//           />
//         </a>
//       </div>
//       <div className="site-header-nav " style={{marginLeft:"200px"}}>
//         <div>
//           <Link to="/">Tires</Link>
//           <div className="site-header-sub-menu">
//             <Link to="/search-by-vehicle/">Search by Vehicle</Link>
//             <Link to="/search-by-size/">Search by Size</Link>
//           </div>
//         </div>
    
//         <div>
//           <Link to="/service/">Services</Link>
//           <div className="site-header-sub-menu">
//             <Link to="/service/">All Services</Link>
//             <Link to="/service/alignment">Alignments</Link>
//             <Link to="/service/oil-change/">Oil Change</Link>
//             <Link to="/service/brakes/">Brakes</Link>
//             <Link to="/service/mufflers">Mufflers</Link>
//             <Link to="/service/rim/">Rim</Link>
//             <Link to="/service/suspention">Suspention</Link>
//             <Link to="/service/towing/">Towing Service</Link>
//           </div>
//         </div>
//         <div>
//         <Link to="/specials/">Specials</Link>
//           <div className="site-header-sub-menu">
//              <Link to="/specials/tire-specials/">Tire Specials</Link>
//              <Link to="/specials/service-specials/">Service Specials</Link>
//              <Link to="/specials/interest-fee/">Interest Free Financing</Link>
//           </div>
//         </div>
//         <div>
//         <Link to="/about-us">About</Link>
//           <div className="site-header-sub-menu">
//           <Link to="/about-us">Contact Us</Link>
//           </div>
//         </div>
     
//       </div>
//       <div className="site-header-right-container">
//         <div className="site-header-right-column">
//           <div className="site-header-right-row">
//             <div>
//               {/* <a href="/cart/" style={{color:'#F2184F'}}>Your Cart</a> */}
//             </div>
//             <div className="site-header-cart-icon">
//               <a href="/cart/" style={{color:'white'}}>
//                 <i className="fas fa-shopping-cart" />
//               </a>
//             </div>
//           </div>
//           <div className="site-header-account-block">
//             <div className="site-header-right-row">
//          <button onClick={() => navigate('/appointment')} style={{backgroundColor:'#F2184F' ,color:'white' , borderRadius:'5px' , padding:'10px 20px'}}>Get Appointments</button>
//             </div>
//             <div className="site-header-account-sub-panel">
//               <p className="size-down">
//                 <em>Not signed in</em>
//               </p>
//               <p>
//                 <a href="/accounts/login/">Sign In</a> &nbsp;|&nbsp;{" "}
//                 <a href="/accounts/signup/">Register</a>{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="site-header-right-mobile">
//   <div className="site-header-cart-icon">
//     <a href="/cart/">
//       <i className="fas fa-shopping-cart" />
//     </a>
//     <span className="header-cart-qty" id="header-cart-qty-mobile">0</span>
//   </div>
//   <button onClic>
//     <i className="fas fa-bars" />
//   </button>
// </div>

//         <div className="site-header-mobile-menu" id="mobile-nav">
//           <a href="/accounts/login/">
//             <div className="account-info">
//               <div className="user-icon">
//                 <i className="fas fa-user" />
//               </div>
//               <div className="user-info">
//                 <p>Not logged in</p>
//                 <p>Log In or Sign Up</p>
//               </div>
//             </div>
//           </a>
//           <div className="menu-item">
//             Tires
//             <div className="sub-menu">
//               <a href="/tires/search-by/vehicle/">Search by Vehicle</a>
//               <a href="/tires/search-by/size/">Search by Size</a>
//               <a href="/tires/search-by/brand/">Search by Brand</a>
//             </div>
//           </div>
//           <div className="menu-item">
//             Inspection
//             <div className="sub-menu">
//               <a href="/services/pa-inspection-and-emissions-test/">
//                 $44.99 PA Inspection
//               </a>
//               <a href="/services/pa-inspection-and-emissions-test/#faq">
//                 Inspection &amp; Emissions FAQ
//               </a>
//             </div>
//           </div>
//           <div className="menu-item">
//             Services
//             <div className="sub-menu">
//               <a href="/services/pa-inspection-and-emissions-test/">Inspection</a>
//               <a href="/services/valvoline-oil-change/">Oil Change</a>
//               <a href="/services/alignment/">Alignment</a>
//               <a href="/services/brake-service/">Brakes</a>
//               <a href="/services/heating-and-air-conditioning/">
//                 Heating &amp; A/C
//               </a>
//               <a href="/services/check-engine-light/">Check Engine Light</a>
//               <a href="/services/bring-your-own-parts/">Bring Your Own Parts</a>
//               <a href="/services/">All Services</a>
//             </div>
//           </div>
//           <div className="menu-item">
//             Specials
//             <div className="sub-menu">
//               <a href="/specials/tire-specials/">Tire Specials</a>
//               <a href="/specials/service-specials/">Service Specials</a>
//               <a href="/financing/">Interest Free Financing</a>
//             </div>
//           </div>
//           <div className="menu-item">
//             About
//             <div className="sub-menu">
//               <a href="/contact-us/">Contact Us</a>
//             </div>
//           </div>
//           <div className="menu-item">
//             Locations
//             <div className="sub-menu">
//               <a href="/locations/clifton-heights/">Clifton Heights</a>
//               <a href="/locations/montgomeryville/">Montgomeryville</a>
//               <a href="/locations/west-chester/">West Chester</a>
//               <a href="/locations/">View Map</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     </div>
//   )
// }

// export default Header