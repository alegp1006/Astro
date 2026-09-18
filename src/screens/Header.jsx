import { Logo } from "../components/Logo";
import logo from "../assets/logo.svg";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";

export function Header() {
  return (
    <header className="header">
      <section className="header-section">
        <Logo logo={logo} />
        <Navbar />
        <Button label={"INICIAR MI PROYECTO"} />
      </section>
    </header>
  );
}
