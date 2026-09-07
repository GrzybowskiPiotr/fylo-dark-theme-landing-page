import { Cta } from "./components/Cta/Cta";
import { EarlyAccess } from "./components/EarlyAccess/EarlyAccess";
import { FeatureList } from "./components/FeatureList/FeatureList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProductOverview } from "./components/ProductOverview/ProductOverview";
import { Testimonial } from "./components/Testimonial/Testimonial";
import "./Style/appStyle.css";

function App() {
  return (
    <>
      <Header />
      <ProductOverview />
      <FeatureList />
      <Cta />
      <Testimonial />
      <EarlyAccess />
      <Footer />
    </>
  );
}

export default App;
