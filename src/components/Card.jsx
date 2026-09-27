import "../styles/card.css";
import { Tags } from "./Tags";

export function Card({ headerNum, headerText, title, text, tags }) {
  return (
    <div className="card">
      <div className="card-content">
        <header className="card-header">
          <p className="card-header-number">{headerNum}</p>
          <p className="card-header-text">{headerText}</p>
        </header>

        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <footer className="card-tags">
        <Tags tags={tags} />
      </footer>
    </div>
  );
}
