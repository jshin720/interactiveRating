import React from "react";
import tyImg from "../../images/illustration-thank-you.svg";

const ThankYouCard = (props) => {
  const handleSubmit = () => {
    props.setSubmitted(false);
  };

  const { rating, submitted } = props;
  console.log("rating", rating);
  console.log("submitted", submitted);
  return (
    <div className="ty-container">
      <h4 onClick={handleSubmit}>Back</h4>
      <span className="ty-img">
        <img src={tyImg} alt="tyImg" />
      </span>
      <h3 className="selected-title">{`You selected ${rating} of 5`}</h3>
      <div className="ty-description-container">
        <h2>Thank you!</h2>
        <p>
          We Appreciate you taking the time to give a rating. If you ever need
          more support, don't hestiate to get in touch
        </p>
      </div>
    </div>
  );
};

export default ThankYouCard;
