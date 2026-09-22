import style from "./ProductOverview.module.css";
import decor from "/images/bg-curvy-mobile.svg";
import ilustrationIntro from "/images/illustration-intro.png";
export function ProductOverview() {
  return (
    <section className={style.container}>
      <div className={style.topCard}>
        <img src={ilustrationIntro} alt="" aria-hidden="true" />
        <div className={style.textSection}>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <a className={`${style["btn-link"]} .btn-link_gradient`}>
            get started
          </a>
        </div>
      </div>
      <div className={style.backDecor}>
        <img src={decor} className={style.mobileImageDecor} />
        <div aria-hidden="true" className={style.topDecorBackground}></div>
      </div>
      <img src={decor} className={style.decorImg} />
    </section>
  );
}
