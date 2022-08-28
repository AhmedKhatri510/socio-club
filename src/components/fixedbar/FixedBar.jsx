import "./FixedBar.css";
import useWindowSize from "./useWindowSize";

const FixedBar = () => {
  const size = useWindowSize();
  const element = (
    <nav className="container w-container">
      <a
        href="https://play.google.com/store/apps/details?id=com.socioclub.socio_club"
        target="_blank"
        className="container-link"
      >
        <div className="text-block">
          <span>download</span> our app now
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.socioclub.socio_club"
          target="_blank"
          className="w-inline-block"
        >
          <img
            src="https://uploads-ssl.webflow.com/5fb3782ace5676c46e40c6b3/6130995c545fb201a8433b3b_google-play-badge%201.png"
            alt="playstore"
            className="image"
          />
        </a>
      </a>
    </nav>
  );
  return <>{size.width < 500 && element}</>;
};

export default FixedBar;