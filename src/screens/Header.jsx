import "../styles/header.css";
import logo from "../assets/logo.svg";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { useId } from "react";
import { MenuClose, MenuOpen } from "../components/Icons";

export function Header() {
  const menuCheckboxId = useId();
  return (
    <header className="header">
      <section className="header-section">
        <Logo logo={logo} />

        <label className="menu-button" htmlFor={menuCheckboxId}>
          <MenuOpen />
        </label>
        <input id={menuCheckboxId} type="checkbox" hidden />

        <div className="desktop">
          <label className="close-button" htmlFor={menuCheckboxId}>
            <MenuClose />
            <input id={menuCheckboxId} type="checkbox" hidden />
          </label>

          <Navbar />

          <Button label={"INICIAR MI PROYECTO"} />
        </div>
      </section>
    </header>
  );
}
