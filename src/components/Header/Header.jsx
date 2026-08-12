import style from "./Header.module.css";

import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";

export function Header() {
  return (
    <header className={style.menuContainer}>
      <Logo />
      <Navigation />
    </header>
  );
}
