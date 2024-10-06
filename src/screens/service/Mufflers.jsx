import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const MufflerService = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What does a muffler do?',
      answer:
        'A muffler is part of your vehicle’s exhaust system. It helps reduce the noise produced by the engine, directs exhaust gases safely away from the engine, and contributes to improved fuel efficiency.',
    },
    {
      question: 'How can I tell if my muffler needs to be replaced?',
      answer:
        'Signs your muffler may need repair or replacement include loud exhaust noises, reduced fuel efficiency, rattling noises from under the vehicle, or visible rust or holes in the muffler or exhaust system.',
    },
    {
      question: 'How often should I have my muffler inspected?',
      answer:
        'It’s a good idea to have your muffler inspected during regular vehicle maintenance or if you notice any changes in the sound or performance of your vehicle. Many mufflers last around 5-7 years, but this can vary depending on driving conditions.',
    },
    {
      question: 'What causes muffler damage?',
      answer:
        'Muffler damage can be caused by rust, road salt, debris hitting the exhaust system, or general wear and tear over time. Driving in harsh conditions, like wet or salty environments, can accelerate muffler deterioration.',
    },
    {
      question: 'What are the benefits of replacing a faulty muffler?',
      answer:
        'Replacing a faulty muffler improves vehicle performance by restoring fuel efficiency, reducing noise, and ensuring that exhaust gases are properly routed away from the vehicle. It also helps prevent exhaust leaks, which can be hazardous to both health and the environment.',
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
                "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(https://images.pexels.com/photos/16124178/pexels-photo-16124178/free-photo-of-close-up-of-the-built-under-the-rear-bumper-in-a-green-lamborghini-huracan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)"
            }}
          >
            <h1>Muffler Service</h1>
            <img
              className="service-hero-logo"
              style={{ filter: "brightness(0.70)" }}
              src="/static/core/images/company-logo.png"
              alt="Company logo"
            />
          </div>

          <div className="service-detail-content">
            <h2>Muffler and Exhaust System</h2>
            <div className="service-description">
              <p>
                A functioning muffler is crucial for reducing engine noise and ensuring your vehicle operates smoothly and efficiently. Our expert technicians provide thorough inspections and repairs of mufflers and exhaust systems to keep your car running quietly and safely.
              </p>
              <p>
                Whether you’re dealing with loud engine noises, reduced fuel efficiency, or an exhaust leak, we offer comprehensive muffler services that restore your vehicle’s performance. We use high-quality parts and expert workmanship to ensure your exhaust system is in top condition.
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

export default MufflerService;
