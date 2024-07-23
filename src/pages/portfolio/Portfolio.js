import React, { useEffect } from "react";
import por from "../../images/portfolioBack.jpeg";
import por2 from "../../images/hb.svg";
import ci from "../../images/contacticon.svg";
import m1 from "../../images/maharaja/desktop/m1.png";
import m2 from "../../images/maharaja/desktop/m2.png";
import m3 from "../../images/maharaja/desktop/m3.png";
import g1 from "../../images/GrowingSeed/g2.png";
import g2 from "../../images/GrowingSeed/g3.png";
import g3 from "../../images/GrowingSeed/g4.png";
import g4 from "../../images/GrowingSeed/g5.png";
import t1 from "../../images/tradeflare/t1.png";
import t2 from "../../images/tradeflare/t2.png";
import t3 from "../../images/tradeflare/t3.png";
import t4 from "../../images/tradeflare/t4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./portfolio.scss";
import { Link } from "react-router-dom";
const Portfolio = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="portfolio_container">
      <div className="portfolio_hero">
        <div className="portfolio_back">
          <img src={por} alt="" className="port_back _back" />
          <img src={por2} alt="" className="port_back _top" />
        </div>
        <div className="portfolio_text">
          <h1>Portfolio Showcase</h1>
          <p>
            Highlighting skills, expertise, and a variety of completed projects
            to captivate visitors and encourage exploration.
          </p>
          <button>Explore More</button>
        </div>
      </div>
      <div className="port_benefits">
        <div className="port_benefits_title">
          <h3>Portfolio</h3>
        </div>
      </div>
      <div className="highlight">
        <div className="highlite_body">
          <div className="h_left">
            <div className="h_title">
              <h3>Feature Highlight</h3>
              <h2>Feature Highlight</h2>
              <p>Website for the India’s No. Chairs Company</p>
            </div>
            <div className="h_left_div">
              <h4 className="active_h">1</h4>
              <div>
                <h3>Wishlist: wishlist to save favorite elements</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>2</h4>
              <div>
                <h3>Email Alerts: Email notification for the contact form</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>3</h4>
              <div>
                <h3>Dynamically Changing content from the Backend</h3>
              </div>
            </div>
          </div>
          <div className="slider_container">
            <Slider {...settings}>
              <div>
                <img src={m1} alt="" />
              </div>
              <div>
                <img src={m2} alt="" />
              </div>
              <div>
                <img src={m3} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="highlight">
        <div className="highlite_body hb_reverse">
          <div className="h_left">
            <div className="h_title">
              <h3>Feature Highlight</h3>
              <h2>GrowingSeed</h2>
              <p>Website for an online courses & consultant company</p>
            </div>
            <div className="h_left_div">
              <h4 className="active_h">1</h4>
              <div>
                <h3>Email Alerts: Email notification for the contact form</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>2</h4>
              <div>
                <h3>Dynamically Changing content from the Backend</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>3</h4>
              <div>
                <h3>Modern Framework: Build with React & Django</h3>
              </div>
            </div>
          </div>
          <div className="slider_container">
            <Slider {...settings}>
              <div>
                <img src={g1} alt="" />
              </div>
              <div>
                <img src={g2} alt="" />
              </div>
              <div>
                <img src={g3} alt="" />
              </div>
              <div>
                <img src={g4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="highlight">
        <div className="highlite_body">
          <div className="h_left">
            <div className="h_title">
              <h3>Feature Highlight</h3>
              <h2>Tradeflair</h2>
              <p>Website for a fintech company</p>
            </div>
            <div className="h_left_div">
              <h4 className="active_h">1</h4>
              <div>
                <h3>Dynamically Content changing from the Backend</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>2</h4>
              <div>
                <h3>Mobile Responsive</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>3</h4>
              <div>
                <h3>Build with 3d objects</h3>
              </div>
            </div>
          </div>
          <div className="slider_container">
            <Slider {...settings}>
              <div>
                <img src={t1} alt="" />
              </div>
              <div>
                <img src={t2} alt="" />
              </div>
              <div>
                <img src={t3} alt="" />
              </div>
              <div>
                <img src={t4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="colab">
        <div className="colab_bottom">
          <img src={ci} alt="" />
          <h2>Contact Us for Collaborations and Inquiries</h2>
          <Link to="/contact">Contact US</Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
