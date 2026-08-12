import { Cta } from "./components/Cta/Cta";
import { FeatureList } from "./components/FeatureList/FeatureList";
import { Header } from "./components/Header/Header";
import { ProductOverview } from "./components/ProductOverview/ProductOverview";
import "./Style/appStyle.css";

function App() {
  return (
    <>
      <Header />
      <ProductOverview />
      <FeatureList />
      <Cta />
    </>
  );
}

export default App;
