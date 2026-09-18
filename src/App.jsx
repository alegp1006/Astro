import "./App.css";

import { Contact } from "./screens/Contact";
import { Footer } from "./screens/Footer";
import { Header } from "./screens/Header";
import { Pricing } from "./screens/Pricing";
import { Services } from "./screens/Services";

function App() {
  return (
    <>
      <Header />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
