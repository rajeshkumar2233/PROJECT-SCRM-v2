import React, { useEffect } from "react";
import "./Platform.css";
import img1 from "../../Assets/img4.1.png";
import { AiFillPlayCircle } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Platform = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="platformSection">
      <div className="platformContainer">
        <div data-aos="fade-right" className="platformContent">
          <h1>Grow Better with ManageMe Today</h1>
          <p>
            With tools to make every part of your process more human and a
            support team excited to help you, getting started with ManageMe has
            never been easier.
          </p>
          <div className="buttonSection flex">
            <button className="button">Start Free Trail</button>
            <button className="button btn">
              <AiFillPlayCircle className="icon" /> Watch Demo
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="platformImg">
          <img src={img1} alt="heroIamge" />
        </div>
      </div>
    </section>
  );
};

export default Platform;
