import React from "react";
import Star from "../../images/icon-star.svg";
// import { useNavigate } from "react-router-dom";
// import Main from "../main/main";
import "./Card.css";

const Card = (props) => {
  // const [rating, setRating] = useState("0");
  console.log("props", props);

  const handleChange = (e) => {
    props.setRating(e.target.value);
  };

  const handleSubmit = () => {
    props.setSubmitted(true);
  };

  console.log("rating", props.rating);

  return (
    <div className="card-container">
      <span className="star-img">
        <img src={Star} alt="Star" className="star-icon" />
      </span>
      <section className="main-card">
        <h1 className="heading">How did we do?</h1>
        <p className="card-description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </section>
      <div className="ratings-container">
        <button className="ratings-button" onClick={handleChange} value="1">
          1
        </button>
        <button className="ratings-button" onClick={handleChange} value="2">
          2
        </button>
        <button className="ratings-button" onClick={handleChange} value="3">
          3
        </button>
        <button className="ratings-button" onClick={handleChange} value="4">
          4
        </button>
        <button className="ratings-button" onClick={handleChange} value="5">
          5
        </button>
        {/* <input
            type="radio"
            value="1"
            name="one"
            checked={props.rating === "1"}
            onChange={handleChange}
          />
          <label htmlFor="one">1</label>
          <input
            type="radio"
            value="2"
            name="two"
            checked={props.rating === "2"}
            onChange={handleChange}
          />
          <label htmlFor="two">2</label>
          <input
            type="radio"
            value="3"
            name="three"
            checked={props.rating === "3"}
            onChange={handleChange}
          />
          <label htmlFor="three">3</label>
          <input
            type="radio"
            value="4"
            name="four"
            checked={props.rating === "4"}
            onChange={handleChange}
          />
          <label htmlFor="four">4</label>
          <input
            type="radio"
            value="5"
            name="five"
            checked={props.rating === "5"}
            onChange={handleChange}
          />
          <label htmlFor="five">5</label> */}
      </div>
      <div className="button-container">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Card;
