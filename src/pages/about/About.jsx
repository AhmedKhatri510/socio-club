/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./About.css";
// import { InstagramEmbed } from "react-social-media-embed";
// import socioclubsuperapp from "../../assets/socioclubsuperapp.jpeg";

function About() {
  return (
    <div>
      <h1>
        {" "}
        <u>
          {" "}
          <i>Our SuperApp</i>{" "}
        </u>
      </h1>
      <div className="iframe-container">
        <iframe
          className="ytl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2Jh9ApWWrjg"
          title="SocioClub promo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p className="para">
        {" "}
        <h1>SocioClub is the Indian SuperApp</h1>
        <h5>
          which focus on only social and entertainment part. It is a one stop
          destination for all your social needs.
          <br />
          This SuperApp has a club for everyone's taste! There are many
          opportunities to win, amazing prizes, and more. When you have
          everything at one place, you can save your time, money and memory. You
          don't need to know multiple password and no need of multiple apps. Now
          it's time for you to experience the power of the SuperApp.
        </h5>{" "}
      </p>{" "}
      <hr />
      <h1>SocioClub, Why it's unique?</h1>
      <div className="iframe-container">
        <img
          src={"/assets/socioclubsuperapp.jpeg"}
          className="imagesuper"
          alt="socioclub superapp"
          width="560"
          height="315"
        />
      </div>
      <p className="para">
        <h4>
          Its main theme sets the app apart from the other entertainment apps in
          India. It's all user-oriented.
        </h4>{" "}
        <br />
        <h4>1 - The SocioClub</h4>
        <h5>
          other than the best time pass app also prioritizes users by making
          money through various ways like different contests in which
          participants & winners get rewards.{" "}
        </h5>
        <br />
        <h5>
          2 - Users can also make money through tokenization by spending more
          time on the app.
        </h5>{" "}
        <br />
        <h5>
          3 - The app overall put users on all the positives like value,
          knowledge, comfort, saved memory, satisfaction, money, laughter, & all
          sorts of entertainment proving to be the most useful app.{" "}
        </h5>
        <br />
        <h5>
          {" "}
          4 - You can use any most popular and best free entertainment apps for
          fun but why go for different apps when SocioClub can give you all
          sorts of quality entertainment and value at one stop.{" "}
        </h5>
        <br />
        <h5>
          5 - The icing on the cake is it's not age-restricted. The app can be
          of use to a child to an aged person. Every niche is covered and
          accessible in one place.
        </h5>
      </p>
    </div>
  );
}

export default About;
