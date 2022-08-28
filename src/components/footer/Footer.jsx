import React from "react";
import "./footer.css";
// import nftlogo from "../../images/logo.png";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillMail,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { SiCrunchbase } from "react-icons/si";
import { BsPinterest } from "react-icons/bs";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer section__padding" id="Contact">
      <div className="footer-links">
        <div className="footer-links_logo">
          <div className="logo-footer">
            <img src={"/assets/logo.png"} alt="logo" />
          </div>
        </div>
        <div
          className="footer-links_div"
          itemScope
          itemType="http://schema.org/Person"
        >
          <h4 className="ms-4"> Contact</h4>
          <a
            rel="noreferrer"
            itemProp="address"
            target="_blank"
            href="https://maps.app.goo.gl/SS9fkf3JKzbyQ1Qg8"
          >
            <p>
              <AddLocationIcon className="me-2" /> Koramangala, 5th block,
              Bangalore Karnataka
            </p>
          </a>
          <p
            rel="noreferrer"
            itemProp="email"
            href="https://mail.google.com/mail/u/0/?fs=1&to=socioclubsc@gmail.com&tf=cm"
            target="_blank"
            disabled
          >
            <p className="ms-1">
              <AiFillMail className="me-2" />
              socioclubsc@gmail.com{" "}
            </p>
          </p>
        </div>
      </div>

      <div className="row justify-content-evenly">
        <p className="text-white text-center">
          © NoBall Entertainments Private Limited
        </p>
        <p className="text-center row">
          <Link
            className="col text-white text-decoration-underline"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="col text-white text-decoration-underline"
            to="/termsConditions"
          >
            Terms and conditions
          </Link>
        </p>
      </div>
      <div className="footer-copyright">
        <div className="flex-icon">
          <div className="card-icon">
            <a
              target="_blank"
              className="d-flex"
              href="https://www.linkedin.com/company/socioclub/"
              rel="noreferrer"
            >
              <AiFillLinkedin size={25} color="white" className="footer-icon" />
              <h6 className="text-white ft my-auto">LinkedIn</h6>
            </a>
          </div>

          <div className="card-icon">
            <a
              target="_blank"
              className="d-flex"
              href="https://instagram.com/socio__club?utm_medium=copy_link"
              rel="noreferrer"
            >
              <AiOutlineInstagram
                size={25}
                color="white"
                className="footer-icon"
              />
              <h6 className="text-white ft my-auto">Instagram</h6>
            </a>
          </div>
          <div className="card-icon">
            <a
              target="_blank"
              className="d-flex"
              href="https://www.facebook.com/Socio-Club-102669199089556"
              rel="noreferrer"
            >
              <AiFillFacebook size={25} color="white" className="footer-icon" />
              <h6 className="text-white ft my-auto">Facebook</h6>
            </a>
          </div>
          <div className="card-icon">
            <a
              target="_blank"
              className="d-flex"
              href="https://medium.com/@www.rohira03/the-best-entertainment-app-2022-socio-club-ee7a6e08278b"
              rel="noreferrer"
            >
              <FaBloggerB size={25} color="white" className="footer-icon" />
              <h6 className="text-white ft my-auto">Blog</h6>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright1">
        <div className="flex-icon">
          <div className="card-icon">
            <a
              target="_blank"
              className="d-flex"
              href="https://www.youtube.com/channel/UCDgEYBxdVoiwzxR2VsxTZUA"
              rel="noreferrer"
            >
              <AiOutlineYoutube
                size={25}
                color="white"
                className="footer-icon"
              />
              <h6 className="text-white ft my-auto">YouTube</h6>
            </a>
          </div>

          <div className="card-icon">
            <a
              target="_blank"
              className="d-flex"
              href="https://twitter.com/Socio__Club"
              rel="noreferrer"
            >
              <AiOutlineTwitter
                size={25}
                color="white"
                className="footer-icon"
              />
              <h6 className="text-white ft my-auto">Twitter</h6>
            </a>
          </div>
          <div className="card-icon">
            <a
              target="_blank"
              className="d-flex"
              href="https://pin.it/7ve2zKB"
              rel="noreferrer"
            >
              <BsPinterest size={25} color="white" className="footer-icon" />
              <h6 className="text-white ft my-auto">Pintrest</h6>
            </a>
          </div>

          <div className="card-icon">
            <a
              target="_blank"
              className="d-flex"
              href="https://www.crunchbase.com/organization/socio-club"
              rel="noreferrer"
            >
              <SiCrunchbase size={25} color="white" className="footer-icon" />
              <h6 className="text-white ft my-auto">Crunch base</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
