import style from "./Logo.module.css"
import LogoIco from "/images/logo.svg"
export function Logo (){
  return<>
  <a href="/" aria-label="home link"><img alt="logo" src={LogoIco} className={style.logo}/></a>
  </>
}