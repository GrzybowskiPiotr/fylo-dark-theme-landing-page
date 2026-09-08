import style from "./Footer.module.css"

export function Footer(){
  return <footer className={style.container}>
    <h2>Footer</h2>
  <p>Icon fylo</p>
  <address>
    <ul>
      <li><img/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></li>
      <li><img/><a href="tel:+15431234567">+1-543-123-4567</a></li>
      <li><img/><a href="mailto:example@fylo.com"></a>example@fylo.com</li>
    </ul>
  </address>
  </footer>
}