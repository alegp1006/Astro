import "../styles/manifest.css";

export function Manifest() {
  return (
    <section className="manifest">
      <article className="manifest-container">
        <header className="manifest-header">
          <p className="manifest-header-span">{`[ MANIFIESTO // VISION DE INGENIERÍA ]`}</p>
          <p className="manifest-header-text">ASTRO PRINCIPALES</p>
        </header>
        <p>
          “EL SOFTWARE BIEN CONSTRUIDO NO ES UN GASTO, ES INFRAESTRUCTURA
          CRÍTICA. VELOCIDAD RADICAL, RESILIENCIA OFFLINE Y CONTROL TOTAL DE TUS
          CANALES.”
        </p>
      </article>
    </section>
  );
}
