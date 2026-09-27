import "../styles/heading.css";

export function Heading({ span, h2, text }) {
  return (
    <header className="heading">
      <div className="heading-container">
        <p>{`[ ${span} ]`}</p>
        <h2>{h2}</h2>
      </div>
      <p className="heading-text">{text}</p>
    </header>
  );
}
