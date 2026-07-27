import { NavBar } from "./components/NavBar/NavBar";
import { WelcomTopComponent } from "./components/WelcomTopComponent/WelcomTopComponent";
import "./Style/appStyle.css";
import ilustrationIntro from "/images/illustration-intro.png";
function App() {


  return (
    <>
      <NavBar items={[
    { name: "Features", url: "#features" },
    { name: "Team", url: "#team" },
    { name: "Sign In", url: "#signin" },
  ]}/>
  <WelcomTopComponent image={ilustrationIntro}/>
    </>
  )
}

export default App
