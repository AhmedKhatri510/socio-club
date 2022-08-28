import React, { useEffect } from "react";
import "./bids.css";
// import audiobook from "../../club/audiobook.webp";
// import Contest from "../../assets/socioclubcontest2.webp";
// import Crypto from "../../club/digital.webp";
// import Music from "../../club/music-note.webp";
// import Radio from "../../club/radio.webp";
// import Meme from "../../assets/Meme.webp";
// import chatbot from "../../club/chatbot.webp";
// import Podcast from "../../club/live.webp";
// import Anonymousw from "../../club/anonymous.webp";
// import videogamestreamer from "../../club/movie.webp";
// import workout from "../../club/fitness.webp";
// import quizbump from "../../club/quiz.webp";
// import newyoga from "../../club/lotus.webp";
// import marketing from "../../club/shopping-cart.webp";
// import exchangecryptocurrency from "../../club/cryptocurrency.webp";
// import gamepadanimation from "../../club/game-console.webp";
// import books from "../../club/audio-book.webp";
// import globalnetwork from "../../club/news.webp";
import { cardsData } from "../constants/cardData";

import Aos from "aos";
import "aos/dist/aos.css";
import Card from "../cards/Card";

const Bids = ({ title }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bids section__padding" id="Features">
      <div className="bids-container">
        <div data-aos="zoom-in" className="bids-container-text">
          {/*<h1>Club Features</h1>*/}
          <p className="fw-bolder display-4 text-center">Club Features</p>
          <br />
        </div>
        <div className="bids-container-card">
          {cardsData.map((cardData) => {
            return (
              <Card
                imagePath={cardData.imagePath}
                title={cardData.title}
                heading={cardData.heading}
                description={cardData.description}
                dataAos={cardData.dataAos}
                key={cardData.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bids;
