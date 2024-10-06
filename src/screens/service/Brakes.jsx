import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const BrakeService = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What are the signs that my brakes need to be serviced?',
      answer:
        'Common signs that your brakes need servicing include squeaking or grinding noises, a vibrating brake pedal, longer stopping distances, or a dashboard warning light indicating brake issues.',
    },
    {
      question: 'How often should I get my brakes inspected?',
      answer:
        'Brake inspections are generally recommended every 12,000 miles or once a year, but you should get them checked sooner if you notice any signs of wear or reduced braking performance.',
    },
    {
      question: 'What causes brake pads to wear out?',
      answer:
        'Brake pad wear is a natural part of driving, but it can be accelerated by aggressive braking, driving in stop-and-go traffic, carrying heavy loads, or using low-quality brake materials.',
    },
    {
      question: 'Can I drive with worn-out brakes?',
      answer:
        'Driving with worn-out brakes is dangerous and can lead to brake failure. If you notice signs of brake wear, such as reduced stopping power or squealing noises, it’s essential to get them inspected and repaired immediately.',
    },
    {
      question: 'What are the benefits of regular brake maintenance?',
      answer:
        'Regular brake maintenance ensures your vehicle’s safety and enhances overall performance. Properly maintained brakes provide better stopping power, reduce wear on brake components, and improve vehicle control.',
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
                "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYWvPghXEIz534YTIwkttSymX36YgIqdWhA&s)"
            }}
          >
            <h1>Brake Service</h1>
            <img
              className="service-hero-logo"
              style={{ filter: "brightness(0.70)" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYWvPghXEIz534YTIwkttSymX36YgIqdWhA&s"
              alt="Company logo"
            />
          </div>

          <div className="service-detail-content">
            <h2>Brake Inspection and Repair</h2>
            <div className="service-description">
              <p>
                Your vehicle’s braking system is vital for ensuring safety on the road. Our team of certified technicians provides complete brake services, including brake pad replacement, rotor resurfacing, and brake fluid checks, ensuring your brakes perform at their best.
              </p>
              <p>
                Whether you’re hearing unusual noises, feeling vibrations when braking, or simply need a routine inspection, our brake services offer peace of mind. We use only high-quality parts and modern diagnostic tools to guarantee that your vehicle stops safely and efficiently.
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

export default BrakeService;
