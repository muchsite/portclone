import React from "react";
import about from "../../images/about.png";
import about1 from "../../images/about1";
import about2 from "../../images/about2";
import about3 from "../../images/about3";
import about4 from "../../images/about4";
import about5 from "../../images/about5";
import about6 from "../../images/about6";
import "./about.scss";
const About = () => {
  const arr = [
    { img: about1 },
    { img: about2 },
    { img: about3 },
    { img: about4 },
    { img: about5 },
    { img: about6 },
  ];
  return (
    <div className="about_container">
      <div className="about_hero_container">
        <div className="about_hero">
          <img src={about} alt="" />
          <div className="about_text">
            <h3>About Us</h3>
            <h1>Our Company Values</h1>
            <p>
              Discover our values, meet our founders, and explore our commitment
              to exceptional website development services.
            </p>
          </div>
        </div>
      </div>
      <div className="about_show">
        <div className="about_show_title">
          <h2>Visual Showcase</h2>
          <p>
            Creative solutions with custom design, responsive development, SEO
            optimization, and post-launch support
          </p>
        </div>
        <div className="about_divs">
          {arr.map((item, index) => {
            return (
              <div className="about_div" key={index}>
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
