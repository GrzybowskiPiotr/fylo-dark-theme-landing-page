import style from "../WelcomTopComponent/WelcomTopComponent.module.css"
export function WelcomTopComponent({image}){
  return <div className={style.container}>
    <img src={image} alt="" aria-hidden="true"/>
    <h1>All your files in one secure location, accessible anywhere.</h1>
    <p>Fylo stores all your most important files in one secure location. Access them wherever
  you need, share and collaborate with friends family, and co-workers.</p>
  <div className={style['btn-container']}>
  <a className={style['btn-link']}>get started</a>
  </div>
  </div>
}