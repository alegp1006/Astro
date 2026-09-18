import "./App.css";
import logo from "./assets/logo.svg";
import { Contact } from "./screens/Contact";
import { Footer } from "./screens/Footer";
import { Header } from "./screens/Header";
import { Pricing } from "./screens/Pricing";
import { Services } from "./screens/Services";

function App() {
  return (
    <>
      <img src={logo} />
      <h1>Astro web</h1>
      <p>texto encaminado</p>
      <Header />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
