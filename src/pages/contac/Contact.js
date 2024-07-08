import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <div>
      <div className="contact_text">
        <div className="b_blur"></div>
        <h1>Welcome to [Your Business Name] Website</h1>
        <p>Explore our offerings and discover how we can help you succeed.</p>
        <button>Explore Now</button>
      </div>
      <div className="contact_form">
        <div className="contact_form_title">
          <h2>Contact Us</h2>
          <p>
            Provide a user-friendly contact form for visitors to easily reach
            out to you. Make it convenient for visitors to send their inquiries
            and feedback directly through the website.
          </p>
        </div>
        <form>
          <div className="form_div">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form_div">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="form_div">
            <label htmlFor="">Message</label>
            <input type="text" placeholder="Enter your message" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
