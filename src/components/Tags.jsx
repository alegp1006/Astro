import "../styles/tags.css";

export function Tags({ tags }) {
  return (
    <ul className="tag-list">
      {tags.map((t) => (
        <li className="tags">{t}</li>
      ))}
    </ul>
  );
}
