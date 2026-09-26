import "../styles/hero.css";
import { Button } from "../components/Button";
import { Metrick } from "../components/Metrick";

export function Hero() {
  return (
    <main className="hero">
      <div className="hero-container">
        <header className="hero-header">
          <div className="hero-header-text">
            <div className="black-square"></div>
            <p>ASTRO // SOFTWARE & SOLUCIONES DIGITALES</p>
          </div>
          <div className="hero-header-text">
            <p>ESTADO: PRODUCCION ACTIVA</p>
            <p className="text-black">DISPONIBILIDAD INMEDIATA</p>
          </div>
        </header>
        <section className="hero-section">
          <h1>
            DESARROLLAMOS SOFTWARE Y SOLUCIONES DIGITALES PARA IMPULSAR TU
            NEGOCIO.
          </h1>
          <aside className="hero-section-aside">
            <p>
              En Astro creamos productos digitales de alto rendimiento: desde
              páginas web modernas hasta sistemas interactivos que optimizan la
              experiencia de tus clientes y potencian tus ventas.
            </p>
            <div className="hero-section-buttons-container">
              <Button label={"INICIAR MI PROYECTO"} />
              <Button
                activeStyleVariant={true}
                label={"VER SERVICIOS DISPONIBLES"}
              />
            </div>
          </aside>
        </section>
      </div>
      <footer className="hero-metric-container">
        <section className="metric-container">
          <Metrick title={"Offline-First"} text={"RESILIENCIA OPERATIVA"} />
          <Metrick title={"100&"} text={"CORE WEB VITALS"} />
          <Metrick title={"<0.5s"} text={"CARGA OPTIMIZADA"} />
          <Metrick title={"End-to-End"} text={"SOLUCION LLAVE EN MANO"} />
        </section>
      </footer>
    </main>
  );
}
