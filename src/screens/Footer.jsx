import logo from "../assets/logo.svg";
import { Data } from "../data/data";
import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer-container">
        <article className="footer-article">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
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
              <a className="footer-link" href="#soluciones">
                Soluciones
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="#servicios">
                Servicios
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="#tecnologia">
                Tecnología
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </article>
        <article className="footer-article">
          <p className="footer-nav">ATENCION DIRECTA</p>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a className="footer-link" href={`mailto:${Data.email}`}>
                Gmail
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href={Data.phone}>
                WhatsApp
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href={`tel:${Data.phone}`}>
                telefono
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href={Data.instagram}>
                Instagram
              </a>
            </li>
            <li className="footer-list-item">
              <a className="footer-link" href={Data.facebook}>
                Facebook
              </a>
            </li>
          </ul>
        </article>
      </section>
      <div className="margin-footer">
        <p>&copy; 2025 ASTRO. SOFTWARE & SOLUCIONES DIGITALES.</p>
      </div>
    </footer>
  );
}
