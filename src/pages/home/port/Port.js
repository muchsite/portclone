import React, { useEffect } from "react";
import "./port.scss";
import f from "../../../images/airtable-white.svg";
import s from "../../../images/make-white.svg";
import t from "../../../images/notion-white.svg";
import fo from "../../../images/typedream-white.svg";
import th from "../../../images/zapier-white.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Port = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="port_containr">
      <div className="port_l" data-aos="fade-up">
        <h2>
          Trusted by Businesses Across Various Industries Who Value Professional
          Websites
        </h2>
        <p>
          Join the ranks of our satisfied clients who have transformed their
          online presence with our services. Our portfolio speaks volumes about
          our commitment to excellence.
        </p>
        <Link to="/portfolio">
          <button>Explore Out Portfolio</button>
        </Link>
      </div>
      <div className="port_r" data-aos="fade-up">
        <img src={f} alt="" />
        <img src={s} alt="" />
        <img src={t} alt="" />
        <img src={fo} alt="" />
        <img src={th} alt="" />
        <img src={f} alt="" />
      </div>
    </div>
  );
};

export default Port;
