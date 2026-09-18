export function CardInfo({ headerText, title, text }) {
  return (
    <article className="card-info">
      <header className="card-info-header">{headerText}</header>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
