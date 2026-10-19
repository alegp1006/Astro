import "../styles/metrick.css";

export function Metrick({ title, text }) {
  return (
    <div className="metrick-box">
      <h2 className="metrick-title">{title}</h2>
      <p className="metrick-text">{text}</p>
    </div>
  );
}
