import style from "./ProductOverview.module.css";
import decor from "/images/bg-curvy-desktop.svg";
import ilustrationIntro from "/images/illustration-intro.png";
export function ProductOverview() {
  return (
    <>
      <div className={style.container}>
        <div className={style.topCard}>
          <img src={ilustrationIntro} alt="" aria-hidden="true" />
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <div className={style["btn-container"]}>
            <a className={style["btn-link"]}>get started</a>
          </div>
        </div>

        <div className={style.topDecor}>
          <img src={decor} className={style.decorImg} />
          <div aria-hidden="true" className={style.topDecorBackground}></div>
        </div>
      </div>
    </>
  );
}
