import style from "./TestimonialCard.module.css";

export function TestimonialCard({
  text,
  img,
  imgAlt,
  personName,
  personTitle,
}) {
  return (
    <article className={style.card}>
      <p>{text}</p>
      <section className={style.author}>
        <img src={img} alt={imgAlt} className={style.avatar} />
        <div>
          <h3 className={style.personName}>{personName}</h3>
          <p className={style.personTitle}>{personTitle}</p>
        </div>
      </section>
    </article>
  );
}
