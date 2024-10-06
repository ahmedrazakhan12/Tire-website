import { ChefHatIcon, ChevronDown, ChevronFirstIcon, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const OilChange = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: 'Why is an oil change necessary?',
        answer:
          'Regular oil changes are vital to keep your engine running smoothly. Engine oil lubricates moving parts, reduces friction, and helps to cool the engine. Over time, oil breaks down and becomes less effective, potentially leading to engine damage if not changed regularly.',
      },
      {
        question: 'How often should I change my oil?',
        answer:
          "The frequency of oil changes depends on your vehicle's make, model, and driving conditions. A general rule of thumb is to change your oil every 3,000 to 5,000 miles or every 3 to 6 months. However, newer vehicles and synthetic oils may have longer intervals between changes.",
      },
      {
        question: 'What type of oil should I use?',
        answer:
          "Refer to your vehicle's owner's manual for the manufacturer's recommended oil type and viscosity. Synthetic oils are becoming increasingly popular due to their superior performance and longevity, but conventional oils are still suitable for many vehicles.",
      },
      {
        question: 'What are the signs that my car needs an oil change?',
        answer:
          'Some common signs that your car needs an oil change include: Dashboard warning light, Engine running louder than usual, Dark, dirty oil on the dipstick, Engine overheating, Decreased fuel efficiency.',
      },
      {
        question: 'Should I change the oil filter with every oil change?',
        answer:
          'Yes, it\'s recommended to replace the oil filter with every oil change. The oil filter helps to remove contaminants from the oil, ensuring that clean oil circulates through the engine. A clogged or dirty oil filter can restrict oil flow and lead to engine damage.',
      },
    ];
  

   


  return (
    <>
  <div className="main-content-wrapper">
    <div className="main-content">
      <div
        className="hero service-page-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(https://tiresetc-media-files.s3.amazonaws.com/images/services/valvoline-oil-change-header2.jpg)"
        }}
      >
        <h1>Valvoline Oil Change</h1>
        <img
          className="service-hero-logo"
          style={{ filter: "brightness(0.70)" }}
          src="/static/core/images/tires-etc-footer-logo.bbdc1f35da36.png"
          alt="Tires Etc logo"
        />
      </div>
      {/* <div className="service-top-container">
        <div className="service-top-text">
          <h3 className="margin-bottom-0">
            $79.99 Full Synthetic Valvoline Oil Change
          </h3>
          <p className="large-print">Most Makes &amp; Models</p>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.intrinsic-container {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n}\n\n.intrinsic-container-16x9 {\n  padding-bottom: 56.25%;\n}\n\n.intrinsic-container-4x3 {\n  padding-bottom: 75%;\n}\n\n.intrinsic-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n"
            }}
          />
          <div className="intrinsic-container intrinsic-container-16x9">
            <iframe
              src="https://drivecontent.autonettv.com/ynt/lshark/ea134fab-5a8f-45ce-804a-74ea6824fe6a"
              frameBorder={0}
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        <div>
          <div className="specials-list-wrapper">
            <div className="coupon">
              <div className="coupon-header">
                <h2>$30 Off Valvoline Oil Change</h2>
                <h4>With Purchase of Any Other Service!</h4>
              </div>
              <div>
                <strong className="size-up">
                  As low as $49.99 with coupon
                </strong>
              </div>
              <div>
                <p>
                  <strong>Expires Oct. 31, 2024</strong>
                </p>
              </div>
              <div>
                <p className="small-print">
                  Most makes and models. Includes up to 5 quarts of
                  full-synthetic Valvoline oil. Additional oil extra. Not to be
                  combined with any other offers. Certain other restrictions may
                  apply. See store for details.
                </p>
              </div>
              <p className="coupon-links">
                <a href="/specials/service-specials/30-off-valvoline-oil-change-with-any-other-service/">
                  <strong>Open &amp; Print Coupon</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="service-content-row">
        <div className="service-content-col image">
          <img
            src="https://tiresetc-media-files.s3.amazonaws.com/images/services/valvoline-logo_small.png"
            alt="Valvoline Oil Change 1"
          />
        </div>
        <div className="service-content-col">
          <h4>Proudly Partnered with Valvoline</h4>
          <p>
            Tires Etc is partnered with the most world-renowned name in
            automotive oil, Valvoline! All Tires Etc locations offer full
            synthetic Valvoline oil changes for{" "}
            <strong>as low as $79.99*</strong> for most makes and models
          </p>
          <p className="small-print">
            * $79.99 price includes up to 5 quarts of full-synthetic Valvoline
            oil. Extra oil additional. Certain other restrictions may apply at
            store's discretion.
          </p>
        </div>
      </div>
      {/* <div className="service-detail-content">
        <h2>Luxury Vehicles Start At $100.99</h2>
        <div className="service-description">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n.price-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-width: 60%;\n    padding: .25em;\n}\n.left p {\n    margin: 0;\n}\n.right {\n    text-align: right;\n    margin-left: 1em;\n}\n.make {\n    font-size: 1.3em;\n    font-weight: bold;\n    font-family: Roboto, sans-serif;\n    color: #005f9e;\n}\n.sub {\n    font-size: .8em;\n    font-weight: bold;\n}\n.price {\n    font-size: 1.2em;\n    font-weight: bold;\n    font-family: Montserrat, sans-serif;\n    color: #ef3f23;\n    margin: 0 !important;\n}\n"
            }}
          />
          <h4 className="med-marg-top margin-bottom-0" />
          <p>
            We also offer full-synthetic Valvoline oil changes on most major
            luxury brand vehicles. Compare the prices below to the dealerships!
          </p>
          <hr />
          <div className="price-row">
            <div className="left">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/misc/acura-logo.png"
                alt="Acura Logo"
              />
            </div>
            <div className="right">
              <p className="price">$100.99</p>
            </div>
          </div>
          <hr />
          <div className="price-row">
            <div className="left">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/misc/audi-logo.png"
                alt="Audi Logo"
              />
            </div>
            <div className="right">
              <p className="price">$104.99 - $110.59</p>
            </div>
          </div>
          <hr />
          <div className="price-row">
            <div className="left">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/misc/bmw-logo.png"
                alt="BMW Logo"
              />
            </div>
            <div className="right">
              <p className="price">$105.39 - $118.99</p>
            </div>
          </div>
          <hr />
          <div className="price-row">
            <div className="left">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/misc/infiniti-logo.jpg"
                alt="Infiniti Logo"
              />
            </div>
            <div className="right">
              <p className="price">$109.59 - $123.19</p>
            </div>
          </div>
          <hr />
          <div className="price-row">
            <div className="left">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/misc/lexus-logo.png"
                alt="Lexus Logo"
              />
            </div>
            <div className="right">
              <p className="price">$114.19 - $143.99</p>
            </div>
          </div>
          <hr />
          <div className="price-row">
            <div className="left">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/misc/mercedes-logo.jpg"
                alt="Mercedes Logo"
              />
            </div>
            <div className="right">
              <p className="price">$128.99 - $146.19</p>
            </div>
          </div>
          <hr />
          <div className="price-row">
            <div className="left">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/misc/mini-logo.jpg"
                alt="Mini Logo"
              />
            </div>
            <div className="right">
              <p className="price">$103.19 - $111.99</p>
            </div>
          </div>
          <hr />
          <div className="price-row">
            <div className="left">
              <img
                src="https://tiresetc-media-files.s3.amazonaws.com/images/misc/volvo-logo.png"
                alt="Volvo Logo"
              />
            </div>
            <div className="right">
              <p className="price">$113.59 - $125.59</p>
            </div>
          </div>
          <hr />
        </div>
      </div> */}
      <div className="  " style={{color:"transparent" , background:'transparent'}}>The Home of Wholesale Tire PricingThe Home of Wholesale Tire PricingThe Home of Wholesale Tire PricingThe Home of Wholesale Tire PricingTire PricingThe Home of Wholesale Tire Pricing</div>
            
      <div className="service-faqs">
      <a id="faq">
        <h3>Frequently Asked Questions:</h3>
      </a>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="question collapsible"
            onClick={() => toggleFAQ(index)}
          >
            <div className="tight-row">
              <div className="collapse-icon">
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div>{faq.question}</div>
            </div>
          </div>
          {openIndex === index && (
            <div className=" ">
             
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>


    </div>
  </div>
   
</>

  )
}

export default OilChange