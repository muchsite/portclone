import React, { useEffect } from "react";
import por from "../../images/portfolioBack.jpeg";
import por2 from "../../images/hb.svg";
import f from "../../images/pre1.svg";
import s from "../../images/pre2.svg";
import t from "../../images/pre3.svg";
import fo from "../../images/pre4.svg";
import fi from "../../images/pre5.svg";
import si from "../../images/pre6.svg";
import h1 from "../../images/h1.jpeg";
import h2 from "../../images/h2.jpeg";
import c1 from "../../images/colab1.png";
import c2 from "../../images/colab2.png";
import ci from "../../images/contacticon.svg";
import "./portfolio.scss";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const arr = [
    {
      img: f,
      title: "Trust",
      sp: "Build trust and credibility with potential clients and collaborators by showcasing your previous work and achievements.",
    },
    {
      img: s,
      title: "Skill Showcase",
      sp: "Display a wide range of skills and expertise through a curated collection of projects, demonstrating your versatility and capabilities.",
    },
    {
      img: t,
      title: "Self-Promotion",
      sp: "Utilize your portfolio as a powerful tool for self-promotion and marketing, allowing you to stand out and attract new opportunities.",
    },
    {
      img: fo,
      title: "Business Opportunities",
      sp: "Create new business opportunities by connecting with potential clients, collaborators, and employers who are impressed by your portfolio.",
    },
    {
      img: fi,
      title: "Visual Impact",
      sp: "Highlight your key projects and accomplishments in a visually appealing layout to leave a lasting impression on visitors.",
    },
    {
      img: si,
      title: "User Experience",
      sp: "Enhance user experience and encourage interaction with intuitive interfaces and user-friendly features.",
    },
  ];
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
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
          <h2>Key Benefits of Your Portfolio</h2>
          <p>
            Showcase the key benefits of your portfolio to build trust, display
            a wide range of skills, promote yourself effectively, and create new
            business opportunities. Our platform is designed to highlight these
            advantages and set you apart in the industry.
          </p>
        </div>
        <div className="pre_divs">
          {arr.map((item, index) => {
            return (
              <div className="pre_div" data-aos="fade-up" key={index}>
                <img src={item.img} alt="" />
                <div className="pre_div_text">
                  <span className="pre_tiv_title">{item.title} </span>
                  <span>{item.sp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="highlight">
        <div className="h_title">
          <h3>Feature Highlight</h3>
          <h2>Feature Highlight</h2>
          <p>
            Highlight specific projects that exemplify your skills and
            expertise. Include client details, industry, scope of work, and key
            accomplishments using visuals.
          </p>
        </div>
        <div className="highlite_body">
          <div className="h_left">
            <div className="h_left_div">
              <h4 className="active_h">1</h4>
              <div>
                <h3>Boost Credibility</h3>
                <p>
                  Build trust and credibility with potential clients and
                  collaborators by showcasing your best work.
                </p>
              </div>
            </div>
            <div className="h_left_div">
              <h4>2</h4>
              <div>
                <h3>Showcase Expertise</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>3</h4>
              <div>
                <h3>Visual Storytelling</h3>
              </div>
            </div>
          </div>
          <img src={h1} alt="" />
        </div>
      </div>
      <div className="highlight">
        <div className="h_title">
          <h3>Media Formats</h3>
          <h2>Media Formats</h2>
          <p>
            Display a diverse range of media formats in our portfolio, featuring
            stunning images, engaging videos, and live website links. Showcase
            our versatility and creativity in every project completed.
          </p>
        </div>
        <div className="highlite_body highlite_body_2">
          <div className="h_left">
            <div className="h_left_div">
              <h4 className="active_h">1</h4>
              <div>
                <h3>Enhances Visual Appeal</h3>
                <p>
                  Showcasing various media formats adds visual interest and
                  engages visitors effectively.
                </p>
              </div>
            </div>
            <div className="h_left_div">
              <h4>2</h4>
              <div>
                <h3>Showcases Expertise</h3>
              </div>
            </div>
            <div className="h_left_div">
              <h4>3</h4>
              <div>
                <h3>Increases Engagement</h3>
              </div>
            </div>
          </div>
          <img src={h2} alt="" className="h2_image" />
        </div>
      </div>
      <div className="colab">
        <div className="colab_top">
          <div className="colab_div">
            <div className="colab_div_text">
              <h3>Layout</h3>
              <p>
                Visually appealing layout that showcases key projects and
                accomplishments
              </p>
            </div>
            <img src={c1} alt="" />
          </div>
          <div className="colab_div">
            <div className="colab_div_text">
              <h3>Descriptions</h3>
              <p>
                Detailed descriptions of each project, including client,
                industry, and scope of work
              </p>
            </div>
            <img src={c2} alt="" />
          </div>
        </div>
        <div className="colab_bottom">
          <img src={ci} alt="" />
          <h2>Contact Us for Collaborations and Inquiries</h2>
          <Link>Contact US</Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
