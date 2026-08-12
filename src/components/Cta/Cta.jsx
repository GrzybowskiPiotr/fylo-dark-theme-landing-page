import style from "./Cta.module.css";
import ArroIco from "/images/icon-arrow.svg";
import stayProdImg from "/images/illustration-stay-productive.png";
export function Cta() {
  return (
    <section className={style.ctaWrapper}>
      <img src={stayProdImg} alt="productive team illustration" />
      <div className={style.CtaContent}>
        <h3>Stay productive, wherever you are</h3>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a>
          See how Fylo works <img src={ArroIco} />
        </a>
      </div>
    </section>
  );
}
