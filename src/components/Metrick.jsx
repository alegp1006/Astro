import "../styles/metrick.css";

export function Metrick({ title, text }) {
  return (
    <div className="metrick-box">
      <p className="metrick-title">{title}</p>
      <p className="metrick-text">{text}</p>
    </div>
  );
}
