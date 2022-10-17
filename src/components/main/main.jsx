import React, { useState } from "react";
import Card from "../maincard/Card";
import Thankyou from "../thankyouCard/ThankyouCard";

function Main() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState("0");

  console.log("submitted", submitted);
  console.log("rating", rating);

  return (
    <>
      {!submitted ? (
        <Card
          setSubmitted={setSubmitted}
          setRating={setRating}
          submitted={submitted}
          rating={rating}
        />
      ) : (
        <Thankyou
          submitted={submitted}
          rating={rating}
          setSubmitted={setSubmitted}
        />
      )}
    </>
  );
}

export default Main;
