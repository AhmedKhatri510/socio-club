import React from "react";

const Card = ({ imagePath, title, heading, description, dataAos }) => {
  return (
    <div className="card-column">
      <div data-aos={dataAos} className="bids-card bg-white">
        <div className="bids-card-top">
          <img
            src={imagePath}
            className="image-responsive"
            alt={heading}
            title={title}
          />
          <h5 className="bids-title text-dark text-center fw-bolder mt-2">
            {heading}
          </h5>
          <div className="text-dark text-center texth">
            {heading} club - <br />
            <h6> {description} </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
