import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const RimService = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the purpose of car rims?',
      answer:
        'Car rims, also known as wheels, support the tires and provide stability to the vehicle. Rims come in different sizes and styles, and choosing the right rim affects your car’s performance, handling, and appearance.',
    },
    {
      question: 'How can I tell if my rims need repair or replacement?',
      answer:
        'Signs that your rims may need repair include visible damage such as cracks, dents, or bends, vibration while driving, or difficulty maintaining tire pressure. Damaged rims can affect the handling and safety of your vehicle.',
    },
    {
      question: 'Can damaged rims be repaired?',
      answer:
        'Yes, in many cases, damaged rims can be repaired, depending on the extent of the damage. Bent or slightly cracked rims can often be fixed, but severe damage may require a replacement to ensure safety.',
    },
    {
      question: 'What causes rim damage?',
      answer:
        'Rim damage is often caused by hitting potholes, curbs, or road debris. Other factors include excessive load on the vehicle, driving on rough terrain, or improper tire installation.',
    },
    {
      question: 'What are the benefits of regular rim maintenance?',
      answer:
        'Regular rim maintenance ensures your vehicle’s safety and performance. Well-maintained rims reduce the risk of tire damage, improve handling and stability, and enhance the overall appearance of your vehicle.',
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
                "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=600)"
            }}
          >
            <h1>Rim Service</h1>
            <img
              className="service-hero-logo"
              style={{ filter: "brightness(0.70)" }}
              src="/static/core/images/company-logo.png"
              alt="Company logo"
            />
          </div>

          <div className="service-detail-content">
            <h2>Rim Repair and Maintenance</h2>
            <div className="service-description">
              <p>
                Your vehicle’s rims play a crucial role in its performance and appearance. Our expert technicians offer comprehensive rim repair and maintenance services to keep your wheels in top shape. Whether you’re dealing with bent, cracked, or scuffed rims, we have the tools and expertise to restore them.
              </p>
              <p>
                Proper rim care not only enhances the look of your vehicle but also ensures better handling, safety, and tire longevity. Trust our professionals to provide quality rim repair, straightening, and refinishing services to give your wheels a fresh and safe finish.
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

export default RimService;
