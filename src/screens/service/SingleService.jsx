import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";

const SingleService = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [serviceData, setServiceData] = useState(null); // State to store fetched service data
  const [faqs, setFaqs] = useState([]); // State to store fetched FAQs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fetch service data from API on component mount
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/services/2"
        );
        const { services, faqs } = response.data;
        console.log(response);
        setServiceData(services);
        setFaqs(faqs);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching service data:", error);
        setError("Failed to load service data.");
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchServiceData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="main-content-wrapper">
        <div className="main-content">
          {serviceData && (
            <>
              <div
                className="hero service-page-hero"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${serviceData.image})`,
                }}
              >
                <h1>{serviceData.title}</h1>
                <img
                  className="service-hero-logo"
                  style={{ filter: "brightness(0.70)" }}
                  src={`https://tirealigners.com/admin/public/${serviceData.icon}`}
                  alt="Company logo"
                />
              </div>
              <div className="service-detail-content">
                <h2>{serviceData.sub_heading}</h2>
                <div className="service-description">
                  <p>{serviceData.description}</p>
                </div>
              </div>
            </>
          )}

          <div className="service-faqs">
            <a id="faq">
              <h3>Frequently Asked Questions:</h3>
            </a>
            {faqs.map((faq, index) => (
              <div key={faq.id}>
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

export default SingleService;
