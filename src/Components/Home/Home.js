import React, { useEffect } from "react";
import "./Home.css";
import { AiFillPlayCircle } from "react-icons/ai";
import img1 from "../../Assets/img1.webp";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="homeSection">
      <div className="homeContainer">
        <div className="homeContent" data-aos="fade-up">
          <h1>
            The Ultimate Social CRM
            <br />
            Tool for your Business.
          </h1>
          <p>
            Software that's powerful, not overpowering. Seamlessly connect your
            data, terms, and customers on one  Social CRM platform that grows with your
            business.
          </p>
          <div className="buttonSection flex">
            <button className="button">Start Free Trail</button>
            <button className="button btn">
              <AiFillPlayCircle className="icon" /> Watch Demo
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="homeImg">
          <img src={img1} alt="heroIamge" />
        </div>
      </div>
    </section>
  );
};

export default Home;
