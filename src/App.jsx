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
import { SearchCheck, ShoppingCart } from "lucide-react";
import SearchBySize from "./screens/SearchBySize";
import SearchByVehicle from "./screens/SearchByVehicle";
import ContactUS from "./screens/ContactUs";
import Register from "./components/Register";
import Login from "./components/Login";
import Catalog from "./screens/Catalog";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewCart from "./screens/ViewCart";
import { useEffect, useState } from "react";




function App() {
  const [cartCount, setCartCount] = useState(0);

  const fetchCartCountData = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Fetch from localStorage
    setCartCount(cartItems.length); 
  }
  const [cartItems, setCartItems] = useState([]);
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];

    // If a valid index is provided, remove the item at that index
    if (index !== -1) {
      updatedCartItems.splice(index, 1); // Remove one item at the found index
    }

    
    
    console.log("updatedCartItems", updatedCartItems);
    
    // Update state and local storage
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
    fetchCartCountData()
  };
  const addToCart = (tire) => { 
    // Get existing cart items from local storage (if any)
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(tire);
    fetchCartCountData()
    
    // Add the new tire to the cart
    
    // Update the local storage with the new cart items array
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Show success toast with red icon
    toast.success("Addeds to Cart", {
        icon: <ShoppingCart />,  // Custom icon
        style: {
          borderRadius: '8px',
          color: '#F2184F',  // Custom text color
        },
      });
      
    // Optional: Log to check if the item was added successfully
    console.log("Cart items updated:", cartItems);
  };
 
 
  
  // UseEffect to fetch cartItems from localStorage on component mount
  useEffect(() => {
    fetchCartCountData()
  }, [location.pathname]); 


  return (
    <>
 <div className="p-absolute" style={{ padding: "30px", position: "fixed", zIndex: "999999", right: "0", bottom: "0" }}>
  <a href="/view-cart"  style={{ background: "#F2184F", borderRadius: "50%", cursor: "pointer", padding: "11px", position: "relative" }} className="shadow">
    <ShoppingCart style={{ color: "#fff" }} />
    <span style={{
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      backgroundColor: 'rgb(32 44 69)', // Badge color
      borderRadius: '50%',
      padding: '4px 8px',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold'
    }}>
      {cartCount} {/* Replace 3 with dynamic value */}
    </span>
  </a>
</div>



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
            element={<Catalog addToCart={addToCart}/>}
          />
  <Route
            path="/view-cart"
            element={<ViewCart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart}/>}
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
