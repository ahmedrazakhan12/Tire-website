import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const Alignment = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: 'What is wheel alignment?',
        answer:
          'Wheel alignment refers to the adjustment of the angles of the wheels so that they are parallel to each other and perpendicular to the ground. Proper alignment ensures optimal vehicle handling, tire wear, and safety.',
      },
      {
        question: 'How often should I get a wheel alignment?',
        answer:
          'It\'s generally recommended to have your wheel alignment checked annually or whenever you notice signs of misalignment, such as uneven tire wear, steering pulling to one side, or a crooked steering wheel.',
      },
      {
        question: 'What are the signs that my vehicle needs a wheel alignment?',
        answer:
          'Common signs of misalignment include uneven or rapid tire wear, steering wheel vibration, vehicle pulling to one side while driving straight, or a crooked steering wheel when driving straight.',
      },
      {
        question: 'What causes wheels to become misaligned?',
        answer:
          'Misalignment can be caused by hitting potholes, curbs, or road hazards, worn suspension components, driving on uneven roads, or improper installation of suspension or steering parts.',
      },
      {
        question: 'What are the benefits of proper wheel alignment?',
        answer:
          'Proper wheel alignment ensures optimal vehicle handling, stability, and safety. It also promotes even tire wear, extends tire life, improves fuel efficiency, and enhances overall driving comfort.',
      },
    ];
  
  
  
    return (
    <>
        <>
  <div className="main-content-wrapper">
    <div className="main-content">
      <div
        className="hero service-page-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(https://tiresetc-media-files.s3.amazonaws.com/images/services/alignment-header.jpg)"
        }}
      >
        <h1>Alignment</h1>
        <img
          className="service-hero-logo"
          style={{ filter: "brightness(0.70)" }}
          src="/static/core/images/tires-etc-footer-logo.bbdc1f35da36.png"
          alt="Tires Etc logo"
        />
      </div>
     
      <div className="service-detail-content">
        <h2>Wheel Alignment</h2>
        <div className="service-description">
          <p>
            Proper wheel alignment is crucial for maintaining tire life,
            handling, and fuel efficiency. Our team of experienced technicians
            utilizes state-of-the-art technology to accurately align your
            vehicle's wheels, ensuring optimal performance on the road.
          </p>
          <p>
            Whether you're experiencing uneven tire wear, steering drift, or
            simply want to maximize the lifespan of your tires, our alignment
            service is tailored to meet your needs. With meticulous attention to
            detail and a commitment to excellence, we'll align your vehicle's
            wheels to manufacturer specifications, providing you with a smooth
            and stable ride.
          </p>
        </div>
      </div>
      <div className="service-faqs">
      <a id="faq">
        <h3>Frequently Asked Questions:</h3>
      </a>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className="question collapsible" onClick={() => toggleFAQ(index)}>
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

    </>
  )
}

export default Alignment