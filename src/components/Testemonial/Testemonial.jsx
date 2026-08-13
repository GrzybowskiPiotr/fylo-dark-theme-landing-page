import style from "./Testemonial.module.css";

import { TestemonialCard } from "../TestemonialCard/TestemonialCard";
import bgQuteImg from "/images/bg-quotes.png";
import img1 from "/images/profile-1.jpg";
import img2 from "/images/profile-2.jpg";
import img3 from "/images/profile-3.jpg";
const Cards = [
  {
    personTitle: "Founder & CEO, Huddle",
    personName: "Satish Patel",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: [img1],
    imgAlt: "",
  },
  {
    personTitle: "Founder & CEO, Huddle",
    personName: "Bruce McKenzie",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: [img2],
    imgAlt: "",
  },
  {
    personTitle: "Founder & CEO, Huddle",
    personName: "Iva Boyd",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: [img3],
    imgAlt: "",
  },
];

export function Testemonial() {
  return (
    <div className={style.testemonialWrapper}>
      <img
        src={bgQuteImg}
        alt=""
        aria-hidden="true"
        className={style.bgQuotesImg}
      />
      <ul className={style.cardList}>
        {Cards.map((card) => (
          <li key={card.personName}>
            <TestemonialCard
              personTitle={card.personTitle}
              personName={card.personName}
              text={card.text}
              img={card.img}
              imgAlt={card.imgAlt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
