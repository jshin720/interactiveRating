import React from "react";
import Star from "../../images/icon-star.svg";
// import { useNavigate } from "react-router-dom";
import Main from "../main/main";

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
        <img src={Star} alt="Star" />
      </span>
      <section>
        <h1>How did we do?</h1>
        <p className="card-description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </section>
      <form action="ratings-form">
        <input
          type="radio"
          value="1"
          name="one"
          id="one"
          checked={props.rating === "1"}
          onChange={handleChange}
        />
        <label htmlFor="one">1</label>
        <input
          type="radio"
          value="2"
          name="two"
          id="two"
          checked={props.rating === "2"}
          onChange={handleChange}
        />
        <label htmlFor="two">2</label>
        <input
          type="radio"
          value="3"
          name="three"
          id="three"
          checked={props.rating === "3"}
          onChange={handleChange}
        />
        <label htmlFor="three">3</label>
        <input
          type="radio"
          value="4"
          name="four"
          id="four"
          checked={props.rating === "4"}
          onChange={handleChange}
        />
        <label htmlFor="four">4</label>
        <input
          type="radio"
          value="5"
          name="five"
          id="five"
          checked={props.rating === "5"}
          onChange={handleChange}
        />
        <label htmlFor="five">5</label>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Card;
