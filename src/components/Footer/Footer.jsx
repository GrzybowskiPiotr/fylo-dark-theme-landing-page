import style from "./Footer.module.css";
import facebookIcon from "/images/facebook.png";
import emailIcon from "/images/icon-email.svg";
import locationIcon from "/images/icon-location.svg";
import phoneIcon from "/images/icon-phone.svg";
import instagramIcon from "/images/instagram.png";
import logo from "/images/logo.svg";
import twitterIcon from "/images/twitter.png";
export function Footer() {
  return (
    <footer className={style.container}>
      <a href="#header">
        <img src={logo} alt="Fylo" className={style.logo} />
      </a>
      <div className={style.detailsContainer}>
        <address>
          <div className={style.addresLine}>
            <div className={style.container_img}>
              <img
                src={locationIcon}
                alt=""
                aria-hidden="true"
                id={style.locatonIcon}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <ul>
            <li className={style.addresLine}>
              <div className={style.container_img}>
                <img
                  className={style.addresLine}
                  src={phoneIcon}
                  alr=""
                  aria-hidden="true"
                  id={style.phoneIcon}
                />
              </div>
              <a href="tel:+15431234567">+1-543-123-4567</a>
            </li>
            <li className={style.addresLine}>
              <div className={style.container_img}>
                <img
                  className={style.addresLine}
                  src={emailIcon}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </li>
          </ul>
        </address>
        <div className={style.footerLinks}>
          <nav className={style.navLinks}>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
            </ul>
          </nav>
          <nav className={style.socialLinsk} aria-label="Social links">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook profile"
                >
                  <img src={facebookIcon} alt="Facebook profile" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="Twiter profile" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram Profile" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
