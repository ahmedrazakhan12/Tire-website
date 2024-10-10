// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./screens/Home";
// import OilChange from "./screens/service/OilChange";
// import Alignment from "./screens/service/Alignment";
// import Brakes from "./screens/service/Brakes";
// import Mufflers from "./screens/service/Mufflers";
// import Rim from "./screens/service/Rim";
// import Suspention from "./screens/service/Suspention";
// import Towing from "./screens/service/Towing";
// import AllService from "./screens/service/AllService";
// import TireSpecial from "./screens/specials/TireSpecial";
// import ServiceSpecial from "./screens/specials/ServiceSpecial";
// import IntrestFee from "./screens/specials/IntrestFee";
// import About from "./screens/About";
// import Appointment from "./screens/Appointment";
// import { SearchCheck } from "lucide-react";
// import SearchBySize from "./screens/SearchBySize";
// import SearchByVehicle from "./screens/SearchByVehicle";

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/service" element={<AllService />} />
//           <Route path="/service/oil-change" element={<OilChange />} />
//           <Route path="/service/alignment" element={<Alignment />} />
//           <Route path="/service/brakes" element={<Brakes />} />
//           <Route path="/service/mufflers" element={<Mufflers />} />
//           <Route path="/service/rim" element={<Rim />} />
//           <Route path="/service/suspention" element={<Suspention />} />
//           <Route path="/service/towing" element={<Towing />} />
//           <Route path="/specials" element={<TireSpecial />} />
//           <Route path="/specials/tire-specials" element={<TireSpecial />} />
//           <Route
//             path="/specials/service-specials"
//             element={<ServiceSpecial />}
//           />
//           <Route path="/specials/interest-fee" element={<IntrestFee />} />
//           <Route path="/about-us" element={<About />} />
//           <Route path="/appointment" element={<Appointment />} />
//           <Route path="/search-by-size" element={<SearchBySize />} />
//           <Route path="/search-by-vehicle" element={<SearchByVehicle />} />

//           <Route
//             path="*"
//             element={
//               <>
//                 <section class="page_404">
//                   <div class="container">
//                     <div class="row">
//                       <div class="col-sm-12 ">
//                         <div class="col-sm-10 col-sm-offset-1  text-center">
//                           <div class="four_zero_four_bg">
//                             <h1 class="text-center ">404</h1>
//                           </div>

//                           <div class="contant_box_404">
//                             <h3 class="h2">Look like you're lost</h3>

//                             <p>the page you are looking for not avaible!</p>

//                             <Link to="/" class="link_404">
//                               Go to Home
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </>
//             }
//           />
//           {/* <Route path="/contact" element={<Contact />} /> */}
//         </Routes>
//         <Footer />
//         <div
//           className="  "
//           style={{
//             color: "rgb(32 44 69)",
//             background: "rgb(32 44 69)",
//             userSelect: "none",
//           }}
//         >
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
//           magni perferendis modi quam ipsa! A eaque consequatur iusto. Enim
//           cupiditate quasi vero provident ipsum ipsam iste fugiat blanditiis.
//           Commodi sapiente non neque enim! Cupiditate pariatur officia maiores
//           vero, neque molestias beatae nulla voluptatibus nam, deleniti autem
//           iusto, rerum distinctio maxime vel dicta ducimus. Beatae recusandae
//           ipsam cupiditate corrupti nihil voluptatibus id tempora, officia ab ex
//           molestiae magnam autem nesciunt temporibus vero quasi impedit a. Culpa
//           possimus voluptatem sit nam dolor ipsa, sequi repudiandae? Repudiandae
//           corrupti dolorem, rem perferendis doloribus error minus quae inventore
//           libero, fugiat provident magnam modi earum. Adipisci.
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import OilChange from "./screens/service/OilChange";
import Alignment from "./screens/service/Alignment";
import Brakes from "./screens/service/Brakes";
import Mufflers from "./screens/service/Mufflers";
import Rim from "./screens/service/Rim";
import Suspention from "./screens/service/Suspention";
import Towing from "./screens/service/Towing";
import AllService from "./screens/service/AllService";
import TireSpecial from "./screens/specials/TireSpecial";
import ServiceSpecial from "./screens/specials/ServiceSpecial";
import IntrestFee from "./screens/specials/IntrestFee";
import About from "./screens/About";
import Appointment from "./screens/Appointment";
import { SearchCheck } from "lucide-react";
import SearchBySize from "./screens/SearchBySize";
import SearchByVehicle from "./screens/SearchByVehicle";
import ContactUS from "./screens/ContactUs";
import Register from "./components/Register";
import Login from "./components/Login";
import Catalog from "./screens/Catalog";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewCart from "./screens/ViewCart";
function App() {
  return (
    <>


<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  toastStyle={{
    fontFamily: "JosefinSans",
  }}
  progressClassName="progress-bar"
  toastClassName="custom-toast"
  icon={'🛒'}
/>


      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<AllService />} />
          <Route path="/service/oil-change" element={<OilChange />} />
          <Route path="/service/alignment" element={<Alignment />} />
          <Route path="/service/brakes" element={<Brakes />} />
          <Route path="/service/mufflers" element={<Mufflers />} />
          <Route path="/service/rim" element={<Rim />} />
          <Route path="/service/suspention" element={<Suspention />} />
          <Route path="/service/towing" element={<Towing />} />
          <Route path="/specials" element={<TireSpecial />} />
          <Route path="/specials/tire-specials" element={<TireSpecial />} />
          <Route
            path="/specials/service-specials"
            element={<ServiceSpecial />}
          />

          
          <Route path="/specials/interest-fee" element={<IntrestFee />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/search-by-size" element={<SearchBySize />} />
          <Route path="/search-by-vehicle" element={<SearchByVehicle />} />
          <Route path="/create-account" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/tires/catalog"
            element={<Catalog />}
          />
  <Route
            path="/view-cart"
            element={<ViewCart />}
          />


          <Route
            path="*"
            element={
              <>
                <section class="page_404">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                          <div class="four_zero_four_bg">
                            <h1 class="text-center ">404</h1>
                          </div>

                          <div class="contant_box_404">
                            <h3 class="h2">Look like you're lost</h3>

                            <p>the page you are looking for not avaible!</p>

                            <a href="" class="link_404">
                              Go to Home
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
        <div
          className="  "
          style={{
            color: "rgb(32 44 69)",
            background: "rgb(32 44 69)",
            userSelect: "none",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          magni perferendis modi quam ipsa! A eaque consequatur iusto. Enim
          cupiditate quasi vero provident ipsum ipsam iste fugiat blanditiis.
          Commodi sapiente non neque enim! Cupiditate pariatur officia maiores
          vero, neque molestias beatae nulla voluptatibus nam, deleniti autem
          iusto, rerum distinctio maxime vel dicta ducimus. Beatae recusandae
          ipsam cupiditate corrupti nihil voluptatibus id tempora, officia ab ex
          molestiae magnam autem nesciunt temporibus vero quasi impedit a. Culpa
          possimus voluptatem sit nam dolor ipsa, sequi repudiandae? Repudiandae
          corrupti dolorem, rem perferendis doloribus error minus quae inventore
          libero, fugiat provident magnam modi earum. Adipisci.
        </div>
        <div
          className="text-center p-3 text-white"
          style={{ backgroundColor: "rgb(242, 24, 79)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://tirealigners.com">
            Tire Alligners
          </a>
        </div>
      </Router>
    </>
  );
}

export default App;
