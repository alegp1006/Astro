import logo from "../assets/logo.svg";
import "../styles/footer.css";

export function Footer() {
  return (
    <footer>
      <section className="footer-container">
        <article className="footer-article">
          <img src={logo} alt="logo" />
          <p className="footer-article-text">
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
          <p className="footer-nav">ATENCION DIRECTA</p>
          <p className="footer-article-text">
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
