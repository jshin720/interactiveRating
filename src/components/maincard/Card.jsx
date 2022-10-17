import React from 'react';

function card() {
  return (
    <div className='card-container'>
      <span className="star-img"> <img src="../../images/icon-star.svg" alt="star" /></span>
      <section>
        <h1>How did we do?</h1>
        <p className="card-description">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
      </section>
      <form action="ratings-form">
        <input type="radio" value="1" name="1" id="" />
      </form>
    </div>
  )
}

export default card