import style from "./Logo.module.css";
import LogoIco from "/images/logo.svg";
export function Logo() {
  return (
    <>
      <a href="/" aria-label="home link">
        <img
          alt=""
          src={LogoIco}
          className={style.logo}
          aria-hidden="true"
        />
      </a>
    </>
  );
}
