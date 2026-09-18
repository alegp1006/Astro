import { ListServices } from "./ListServices";

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
      <header className="sevice-card">
        <p>{headerNum}</p>
        <p className="sevice-card-text">{headerText}</p>
      </header>
      <div className="service-card-main">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-text">{text}</p>
      </div>
      <div className="service-card-pricing">
        <p className="service-card-pricing-price">{pricing}</p>
        <p className="service-card-pricing-text">{pricingText}</p>
      </div>
      <ListServices services={listServices} />
      <a href={linkHref} className="service-card-link">
        {linkText}
      </a>
    </article>
  );
}
