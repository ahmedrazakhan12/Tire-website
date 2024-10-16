import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQPage = () => {
  const faqs = [
    {
      id: '239',
      question: 'What types of vehicles do you service?',
      answer: 'We service all major brand name cars. Whether you drive a sedan, SUV, truck, or hybrid, our team is equipped and trained to handle your automotive needs.',
    },
    {
      id: '240',
      question: 'What automotive services do you offer?',
      answer: 'We provide a full range of automotive services including suspension work, wheel alignments, tire and brake services, muffler repairs, towing services, oil changes, and rim/tire sales. Visit our Services page for more detailed information.',
    },
    {
      id: '241',
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment online through our website\'s booking system or by calling our service center directly. The links and phone numbers are available on our Contact Us page.',
    },
    {
      id: '242',
      question: 'Are your mechanics certified?',
      answer: 'Yes, all of our mechanics and technicians are state-recognized and ASE certified, ensuring that your vehicle is handled by qualified professionals.',
    },
    {
      id: '243',
      question: 'What should I do if I need emergency towing?',
      answer: 'If you require emergency towing services, please call our 24/7 towing line listed on our website. We provide quick and reliable towing to help you in urgent situations.',
    },
    {
      id: '244',
      question: 'Do you offer any warranties or guarantees with your services?',
      answer: 'Yes, we offer a 100% satisfaction guarantee on all services. We also provide specific warranties for certain services and parts. Please inquire at our service center for detailed information about our warranties.',
    },
    {
      id: '245',
      question: 'How often should I have my vehicle serviced?',
      answer: 'Service frequency can vary by vehicle type and how it’s used. Generally, we recommend checking your owner\'s manual for specific recommendations. You can also call us for a personalized consultation based on your car’s condition and driving habits.',
    },
    {
      id: '246',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including cash, major credit cards, and debit cards. Please contact our office for more details or if you have specific payment questions.',
    },
    {
      id: '247',
      question: 'Can I purchase tires directly from your locations?',
      answer: 'Absolutely! We offer a wide range of high-quality tires suitable for all types of vehicles. You can purchase them directly from any of our locations and have them installed by our expert technicians.',
    },
    {
      id: '248',
      question: 'How can I provide feedback on the services I received?',
      answer: 'We highly value your feedback as it helps us to improve our services. You can provide feedback by filling out a feedback form on our website, contacting us via email, or speaking directly with our service manager at our locations.',
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Frequently Asked Questions - Tire Aligners</h1>
      <div className="container">
        <div id="accordion" className="py-5">
          {faqs.map(({ id, question, answer }) => (
            <div className="card border-0" key={id}>
              <div className="card-header p-0 border-0" id={`heading-${id}`}>
                <button
                  className="btn btn-link accordion-title border-0"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${id}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${id}`}
                >
                  <i className="fas fa-plus text-center d-flex align-items-center justify-content-center h-100" />
                  {question}
                </button>
              </div>
              <div
                id={`collapse-${id}`}
                className={`collapse ${id === '239' ? 'show' : ''}`} // Show the first FAQ by default
                aria-labelledby={`heading-${id}`}
                data-bs-parent="#accordion"
              >
                <div className="card-body accordion-body">
                  <p>{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p>
            For any other questions not covered here, please don't hesitate to{" "}
            <a href="/contact">contact us</a> directly. We are here to assist you
            with all your automotive needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
