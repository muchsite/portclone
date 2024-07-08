import React, { useState } from "react";
import "./faq.scss";
import plus from "../../../images/plus.svg";
import minus from "../../../images/minus.svg";
const Faq = () => {
  const arr = [
    {
      q: "What services do you offer for website development?",
      a: "We offer comprehensive website development services including custom design, responsive development, SEO optimization, content creation, and post-launch support.",
    },
    {
      q: "How do you tailor solutions for businesses' unique needs?",
      a: "We tailor our solutions to meet the unique needs of businesses by ensuring a strong online presence and providing a seamless user experience.",
    },
    {
      q: "What services do you offer for website development?",
      a: "We tailor our solutions to meet the unique needs of businesses by ensuring a strong online presence and providing a seamless user experience.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, we offer post-launch support to assist businesses after their website goes live, ensuring ongoing maintenance and updates.",
    },
    {
      q: "What is your approach to SEO optimization?",
      a: "Our approach to SEO optimization involves implementing strategies to improve search engine visibility and increase organic traffic to your website.",
    },
    {
      q: "How can I get support for my website after it's launched?",
      a: "You can rely on our team for ongoing support and maintenance post-launch, ensuring your website remains functional and up-to-date.",
    },
  ];
  const [i, setI] = useState(null);

  return (
    <div className="faq_container">
      <div className="faq_title" data-aos="fade-up">
        <h2>
          Frequently Asked Questions About Our Services, Process, and Support
        </h2>
        <p>Have Questions? We've Got Answers</p>
      </div>
      <div className="faq_divs">
        {arr.map((item, index) => {
          return (
            <div className="faq_div" key={index} data-aos="fade-up">
              <div className="faq_q_container">
                <h3>{item.q}</h3>
                <div>
                  <img
                    src={plus}
                    alt=""
                    className={`q_btn ${i == index && "q_btn_0"}`}
                    onClick={() => setI(index)}
                  />
                  <img
                    src={minus}
                    alt=""
                    className={`q_btn ${i !== index && "q_btn_0"}`}
                    onClick={() => setI(null)}
                  />
                </div>
              </div>
              <div className={`wrapper ${i == index && "show"}`}>
                <p className="ans_div">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
