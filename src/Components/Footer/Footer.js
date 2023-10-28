import React, { useEffect } from "react";
import "./Footer.css";

import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footerSection">
      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div data-aos="fade-up" className="footerHeading">
            <h1>
            ManageMe<span> </span>
            </h1>
          </div>
          <div data-aos="fade-up" className="footerPeragraph">
            <p>ManageMe is the number one social CRM tool.</p>
          </div>
          <div className="footerSocials flex">
            <BsFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <BsTwitter className="icon" />
            <BsYoutube className="icon" />
          </div>
        </div>

        <div className="footerLinks grid">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="linkGroup flex"
          >
            <ul className="linkGroupList">
              {" "}
              <span className="groupTitle flex">Company</span>
              <li className="footerList">
                <a href="#Features">Features</a>
              </li>
              <li className="footerList">
                <a href="#Features">About</a>
              </li>
              <li className="footerList">
                <a href="#Features">Pricing</a>
              </li>
              <li className="footerList">
                <a href="#Features">Resources</a>
              </li>
              <li className="footerList">
                <a href="#Features">Contact</a>
              </li>
            </ul>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="linkGroup"
          >
            <ul className="linkGroupList">
              {" "}
              <span className="groupTitle flex">Help</span>
              <li className="footerList">
                <a href="#Terms&Conditions">Terms & Conditions</a>
              </li>
              <li className="footerList">
                <a href="#PrivacyPolicy">Privacy Policy</a>
              </li>
              <li className="footerList">
                <a href="#CustomerSupport">Customer Support</a>
              </li>
            </ul>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="5000"
            className="linkGroup"
          >
            <ul className="linkGroupList">
              {" "}
              <span className="groupTitle flex">Resources</span>
              <li className="footerList">
                <a href="#Terms&Conditions">Terms & Conditions</a>
              </li>
              <li className="footerList">
                <a href="#PrivacyPolicy">Privacy Policy</a>
              </li>
              <li className="footerList">
                <a href="#CustomerSupport">Customer Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
