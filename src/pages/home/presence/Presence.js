import React from "react";
import "./presence.scss";
import fe from "../../../images/feature-br-dashboard-dark.png";
const Presence = () => {
  return (
    <div className="pre_contaner">
      <div className="presence_container">
        <div className="presence_left" data-aos="fade-up">
          <h2>Elevate Your Online Presence</h2>
          <p>
            Ready to take your online presence to the next level? Contact us
            today to kickstart your custom website project. Let's collaborate to
            create something truly remarkable.
          </p>
          <button>Contact</button>
        </div>
        <img src={fe} alt="" data-aos="fade-up" />
      </div>
    </div>
  );
};

export default Presence;
