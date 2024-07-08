import React, { useEffect } from "react";
import "./hero.scss";
import f from "../../../images/homeF1.png";
import s from "../../../images/homeF2.png";
import t from "../../../images/homeF3a.png";
import fo from "../../../images/homeF3b.png";
import fi from "../../../images/homeF4.png";
import si from "../../../images/homeF5.png";

const Hero = () => {
  return (
    <div className="h_c">
      <div className="hero_container">
        <h1 data-aos="fade-up">
          Grow Your Business with User-
          <br /> <span>Friendly, SEO-Optimized Websites</span>
        </h1>
        <p data-aos="fade-up">
          Discover our comprehensive website development services tailored to
          your unique business needs. Our custom designs, responsive
          development, SEO optimization, and post-launch support ensure your
          business stands out online.
        </p>
        <button data-aos="fade-up">Learn More</button>
      </div>
      <div className="hero_imgages_container">
        <div className="hero_images">
          <img src={f} alt="hero" className="hero_f_1" />
          <img src={s} alt="" className="hero_f_2" />
          <div className="hero_f_3">
            <img src={t} alt="" className="hero_f_3_a" />
            <img src={fo} alt="" className="hero_f_3_b" />
          </div>
          <img src={fi} alt="" className="hero_f_4" />
          <img src={si} alt="" className="hero_f_5" />
        </div>
        <img src={f} alt="hero" className="image_height" />
      </div>
    </div>
  );
};

export default Hero;
