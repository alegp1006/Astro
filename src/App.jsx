import "./App.css";

import { Contact } from "./screens/Contact";
import { Footer } from "./screens/Footer";
import { Header } from "./screens/Header";
import { Hero } from "./screens/Hero";
import { Manifest } from "./screens/Manifest";
import { Services } from "./screens/Services";
import { Solutions } from "./screens/Solutions";
import { WhyAstro } from "./screens/WhyAstro";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Solutions />
      <Manifest />
      <Services />
      <WhyAstro />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
