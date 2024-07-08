import React from "react";
import t1 from "../../../images/t1.png";
import t2 from "../../../images/t2.png";
import t3 from "../../../images/t3.png";
import t4 from "../../../images/t4.png";
import t5 from "../../../images/t5.png";
import t6 from "../../../images/t6.png";
import "./test.scss";
const Test = () => {
  const arr = [
    {
      img: t1,
      text: "Working with this website development team was a game-changer for our business. Their expertise in creating a visually stunning and professional website surpassed our expectations. Since the site launch, we've experienced remarkable growth and success in our online presence. Thank you for helping us thrive!",
      prof: "Retail Business Owner",
      name: "Sara T.",
    },
    {
      img: t2,
      text: "Our new website has been a game-changer for our business. The team provided valuable insights and incorporated features that helped our hospitality company stand out online. We're thrilled with the results!",
      prof: "Hospitality Business Owner",
      name: "Rachel R.",
    },
    {
      img: t3,
      text: "Insert testimonial text here.",
      prof: "Business Owner",
      name: "Mike P.",
    },
    {
      img: t4,
      text: "The team was extremely responsive and professional throughout the entire process. They not only delivered an incredible website but also took the time to walk us through site management and best practices. Highly recommend!",
      prof: "Service Industry Professional",
      name: "Client Y",
    },
    {
      img: t5,
      text: "Collaborating with this website development team was a fantastic experience. They tailored their services to meet our unique needs and created a website that perfectly represents our brand. Our online presence has never been stronger thanks to their expertise!",
      prof: "Small Business Owner",
      name: "David S.",
    },
    {
      img: t6,
      text: "Insert testimonial text here.",
      prof: "Entrepreneur",
      name: "Client Z",
    },
  ];
  return (
    <div className="test_container">
      <div className="test_text" data-aos="fade-up">
        <h2>Happy Clients Speak Up</h2>
        <h3>Happy Clients Share Their Success Stories</h3>
      </div>
      <div className="test_divs">
        {arr.map((item, index) => {
          return (
            <div
              data-aos="fade-up"
              className="test_div"
              key={index}
              //   style={{
              //     marginTop: `${(index + 1) % 2 == 0 ? index * 20 : 0}px`,
              //   }}
            >
              <div className="test_div_head">
                <img src={item.img} alt="" />
                <div className="test_div_info">
                  <h4> {item.name}</h4>
                  <p>{item.prof}</p>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
