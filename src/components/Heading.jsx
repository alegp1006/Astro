export function Heading({ span, h2, text }) {
  return (
    <header className="header">
      <div className="header-container">
        <span>{`[ ${span} ]`}</span>
        <h2>{h2}</h2>
      </div>
      <p className="header-text">{text}</p>
    </header>
  );
}
