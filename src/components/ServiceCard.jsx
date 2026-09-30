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
          <p className="service-card-pricing-price">{pricing}</p>
          <p className="service-card-pricing-text">{pricingText}</p>
        </div>
        <ListServices services={listServices} />
      </div>

      <a href={linkHref} className="service-card-link">
        {linkText}
      </a>
    </article>
  );
}
