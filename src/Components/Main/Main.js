import React, { useEffect } from "react";
import "./Main.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { BiCalendar } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";

import img1 from "../../Assets/img 6.png";
import img2 from "../../Assets/img3.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mainSection">
      <div className="mainSection1 flex">
        <div data-aos="fade-right" className="featureImg">
          <img src={img1} alt="FeatureImage" />
        </div>
        <div data-aos="fade-right" className="featureContent">
          <h1>Intuitive Social CRM to get you conversions</h1>
          <p>
            With intuitive features, making ManageMe supeiror to many similar
            competitiors
          </p>
          <ul className="featureContentLinks grid">
            <li>
              <a href="#Track Progress">
                <BsGraphUp className="icon" /> Track Progress
              </a>
            </li>
            <li>
              <a href="#Visual Sales">
                <GiProgression className="icon" /> Visual Sales
              </a>
            </li>
            <li>
              <a href="#Daily Reporting">
                <BiCalendar className="icon" /> Daily Reporting
              </a>
            </li>
            <li>
              <a href="#Revanue Forcasting">
                <BsFileBarGraph className="icon" /> Revanue Forcasting
              </a>
            </li>
          </ul>
          <button className="featureBtn">
            Get Free Trail <BsFillArrowRightCircleFill className="icon" />
          </button>
        </div>
      </div>

      <div className="mainSection2 flex">
        <div data-aos="fade-left" className="featureContent featureContent2">
          <h1>Integrate, collaborate, and grow with ManageMe</h1>
          <p>
            With cloud features, make sure your business can collaborate easly.
          </p>
          <ul className="featureContentLinks grid">
            <li>
              <a href="#Marketing Cloud">
                <BsGraphUp className="icon" /> Marketing Cloud
              </a>
            </li>
            <li>
              <a href="#AppConnect">
                <GiProgression className="icon" /> AppConnect
              </a>
            </li>
            <li>
              <a href="#Insightly Marketing">
                <BiCalendar className="icon" /> Insightly Marketing
              </a>
            </li>
            <li>
              <a href="#uild relatioinships">
                <BsFileBarGraph className="icon" /> Build relatioinships
              </a>
            </li>
          </ul>
          <button className="featureBtn">
            Get Free Trail <BsFillArrowRightCircleFill className="icon" />
          </button>
        </div>
        <div data-aos="fade-left" className="featureImg featureImg2">
          <img src={img2} alt="FeatureImage" />
        </div>
      </div>
    </div>
  );
};

export default Main;
