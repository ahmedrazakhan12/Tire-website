import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const TowingService = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What should I do if my car breaks down and I need towing?',
      answer:
        'If your car breaks down, move your vehicle to a safe location if possible and call for a professional towing service. Provide your exact location and any important details about your vehicle’s condition.',
    },
    {
      question: 'How much does towing typically cost?',
      answer:
        'Towing costs vary depending on the distance, type of vehicle, and service provider. Local tows may be charged per mile, while long-distance towing may include flat rates plus mileage fees.',
    },
    {
      question: 'Can my vehicle be towed if it is not running?',
      answer:
        'Yes, our towing service can safely tow vehicles that are not running. We have the proper equipment to handle cars in any condition, whether they’ve been in an accident or have mechanical issues.',
    },
    {
      question: 'What types of vehicles can be towed?',
      answer:
        'Our towing services can handle a wide range of vehicles, including cars, trucks, SUVs, motorcycles, and even heavy-duty vehicles. Let us know your vehicle type when requesting towing assistance.',
    },
    {
      question: 'How long does it take for a tow truck to arrive?',
      answer:
        'Response times vary based on your location and current traffic conditions. Typically, tow trucks arrive within 30 to 60 minutes, but our team will keep you updated on the arrival time.',
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
                "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(https://images.pexels.com/photos/943930/pexels-photo-943930.jpeg?auto=compress&cs=tinysrgb&w=600)"
            }}
          >
            <h1>Towing Service</h1>
            <img
              className="service-hero-logo"
              style={{ filter: "brightness(0.70)" }}
              src="/static/core/images/company-logo.png"
              alt="Company logo"
            />
          </div>

          <div className="service-detail-content">
            <h2>Roadside Assistance and Towing</h2>
            <div className="service-description">
              <p>
                Stuck on the road? Our reliable towing services are available 24/7 to assist you in emergencies. Whether your vehicle has broken down, been involved in an accident, or you need roadside assistance, our professional towing team is just a call away.
              </p>
              <p>
                We offer fast, safe, and affordable towing for all types of vehicles. Our certified drivers and modern equipment ensure that your vehicle is towed securely to your desired location, whether it’s a repair shop or your home.
              </p>
            </div>
          </div>

          <div className="service-faqs">
            <a id="faq">
              <h3>Frequently Asked Questions:</h3>
            </a>
            {faqs.map((faq, index) => (
              <div key={index}>
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
                {openIndex === index && <div>{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TowingService;
