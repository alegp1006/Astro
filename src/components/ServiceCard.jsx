import { ListServices } from "./ListServices";
import "../styles/serviceCard.css";
export function ServiceCard({
  listServices,
  headerNum,
  headerText,
  title,
  text,
  pricing,
  pricingText,
  linkText,
  demoLinkHref,
  linkHref,
}) {
  return (
    <article className="service">
      <div className="service-container">
        <header className="service-card-header">
          <p className="service-number">{headerNum}</p>
          <p className="service-card-text-header">{headerText}</p>
        </header>
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-text">{text}</p>
        <div className="service-card-pricing">
          <h4 className="service-card-pricing-price">{pricing}</h4>
          <p className="service-card-pricing-text">{pricingText}</p>
        </div>
        <ListServices services={listServices} />
      </div>

      <footer className="buttons-section">
        <a href={linkHref} className="service-card-link">
          {linkText}
        </a>
        <a href={demoLinkHref} className="service-card-link">
          VER DEMO EN TIEMPO REAL
        </a>
      </footer>
    </article>
  );
}
