import styles from "../NavBar/NavBar.module.css";
import logo from "/images/logo.svg";
export function NavBar({items}){
  return (
    <div className={styles.menuContaner}>
    <a href="/" aria-label="home link"><img alt="logo" src={logo}/></a>
    <nav className="navMenu">
      <ul>
        {items.map((item) => (<li key={item.url}>
          <a href={item.url}>{item.name}</a>
        </li>))}
      </ul>
    </nav>
    </div>
  )
}