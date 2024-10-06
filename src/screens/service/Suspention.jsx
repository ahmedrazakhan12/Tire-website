import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const SuspensionService = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is a car suspension system?',
      answer:
        'A car suspension system is responsible for maximizing the friction between the tires and the road surface, providing steering stability with good handling and ensuring the comfort of passengers by absorbing the shock from the road.',
    },
    {
      question: 'How often should I get my suspension system inspected?',
      answer:
        'It\'s recommended to have your suspension system inspected annually, or whenever you notice signs such as excessive bouncing, uneven tire wear, or difficulty steering. Regular checks help prevent larger issues from developing.',
    },
    {
      question: 'What are the signs that my car suspension needs repair?',
      answer:
        'Common signs include excessive bouncing after hitting a bump, uneven tire wear, a drifting or pulling sensation when turning, or feeling every bump in the road more than usual.',
    },
    {
      question: 'What causes suspension problems?',
      answer:
        'Suspension problems can be caused by hitting potholes or curbs, normal wear and tear of components like shocks and struts, or carrying excessive loads over long periods.',
    },
    {
      question: 'What are the benefits of maintaining a healthy suspension system?',
      answer:
        'Proper suspension maintenance ensures a smooth ride, better handling, even tire wear, and improved vehicle stability and safety. It also extends the lifespan of other vehicle components by reducing strain on them.',
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
                "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(https://images.pexels.com/photos/2527923/pexels-photo-2527923.jpeg?auto=compress&cs=tinysrgb&w=600)"
            }}
          >
            <h1>Suspension Service</h1>
            <img
              className="service-hero-logo"
              style={{ filter: "brightness(0.70)" }}
              src="/static/core/images/company-logo.png"
              alt="Company logo"
            />
          </div>

          <div className="service-detail-content">
            <h2>Car Suspension System</h2>
            <div className="service-description">
              <p>
                Maintaining a healthy suspension system is essential for your
                vehicle’s performance and safety. Our experienced technicians
                provide comprehensive suspension services to ensure that your
                car offers a smooth and controlled ride.
              </p>
              <p>
                Whether you’re experiencing rough rides, uneven tire wear, or
                unstable handling, our suspension service will restore your
                vehicle's optimal performance. Using the latest tools and
                techniques, we thoroughly inspect and repair key components like
                shocks, struts, and springs.
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

export default SuspensionService;
