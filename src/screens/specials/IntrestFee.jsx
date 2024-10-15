import axios from "axios";
import React, { useEffect, useState } from "react";

const IntrestFee = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [interestFeeCards, setInterestFeeCards] = useState([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/interest"
        );
        const data = response.data;
        setTitle(data.title);
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    const fetchInterestFeeCards = async () => {
      try {
        const response = await axios.get(
          "https://tirealigners.com/admin/api/interestcards"
        );
        const data = response.data;
        setInterestFeeCards(data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchInterestFeeCards();
    fetchServiceData();
  }, []);

  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <h1>{title}</h1>
        <p className="size-up">{description}</p>
        <p className="size-up">
          Existing cardholders of any of these cards are welcome as well!
        </p>
        <div className="image-and-info-rows-wrapper reverse top-align">
          {interestFeeCards.map((card, index) => (
            <div className="image-and-info-row">
              <a
                id="goodyear-credit-card"
                className="image-link default-cursor"
              >
                <img
                  src={`https://tirealigners.com/admin/public/${card.image}`}
                  alt="Goodyear Credit Card image"
                />
              </a>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  <li>6 months Interest Free on purchases of $250 or more</li>
                  <li>Up to double the rebate amount on Goodyear tires</li>
                  <li>Payments as low as $42 per month*</li>
                </ul>
                <p className="small-print">{card.small_description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="xl-print font-weight-bold">
          Talk to our friendly, knowledgeable staff for more details and to
          apply.
        </p>
      </div>
    </div>
  );
};

export default IntrestFee;
