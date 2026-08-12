import style from "./FeatureList.module.css";
import accessIco from "/images/icon-access-anywhere.svg";
import anyFileIco from "/images/icon-any-file.svg";
import colaborationIco from "/images/icon-collaboration.svg";
import securityIco from "/images/icon-security.svg";

const Features = [
  {
    img: accessIco,
    title: "Access your files, anywhere",
    des: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    img: securityIco,
    title: "Security you can trust",
    des: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    img: colaborationIco,
    title: "Real-time collaboration",
    des: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    img: anyFileIco,
    title: "Store any type of file",
    des: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

export function FeatureList() {
  return (
    <div className={style.featuresListContainer}>
      <ul className={style["features-list"]}>
        {Features.map((item) => {
          return (
            <li className={style.li}>
              <img src={item.img} />
              <h2>{item.title}</h2>
              <p>{item.des}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
