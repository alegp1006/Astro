import "./App.css";

import { Contact } from "./screens/Contact";
import { Footer } from "./screens/Footer";
import { Header } from "./screens/Header";
import { Hero } from "./screens/Hero";
import { Pricing } from "./screens/Pricing";
import { Services } from "./screens/Services";
import { Solutions } from "./screens/Solutions";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Solutions />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
