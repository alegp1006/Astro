import logo from "../assets/logo.svg";

export function Footer() {
  return (
    <footer>
      <section>
        <article className="footer-article">
          <img src={logo} alt="logo" />
          <p>
            Software & Soluciones Digitales. Desarrollamos productos digitales
            de alto rendimiento: páginas web modernas y sistemas interactivos
            para impulsar tu negocio.
          </p>
        </article>
        <article className="footer-article">
          <p className="footer-nav">NAVEGACIÓN</p>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a className="footer-link" href="#">
                Soluciones
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="#">
                Servicios
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="#">
                Tecnología
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </article>
        <article className="footer-article">
          <p>ATENCION DIRECTA</p>
          <p>
            contacto@astro.agency WhatsApp & Canales Digitales Despliegue Llave
            en Mano
          </p>
        </article>
      </section>
      <div className="margin-footer">
        <p>&copy; 2025 ASTRO. SOFTWARE & SOLUCIONES DIGITALES.</p>
      </div>
    </footer>
  );
}
