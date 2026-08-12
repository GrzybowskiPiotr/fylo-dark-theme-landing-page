import style from "./Navigation.module.css";
const items = [
  { name: "Features", url: "#features" },
  { name: "Team", url: "#team" },
  { name: "Sign In", url: "#signin" },
];

export function Navigation() {
  return (
    <>
      <nav>
        <ul className={style.navList}>
          {items.map((item) => (
            <li key={item.url}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
