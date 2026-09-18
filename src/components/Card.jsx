import { Tags } from "./Tags";

export function Card({ headerNum, headerText, title, text, tags }) {
  return (
    <div className="card">
      <header>
        <p>{headerNum}</p>
        <p>{headerText}</p>
      </header>
      <section>
        <h3>{title}</h3>
        <p>{text}</p>
      </section>
      <footer>
        <Tags tags={tags} />
      </footer>
    </div>
  );
}
