import "../styles/tags.css";

export function Tags({ tags }) {
  return (
    <ul className="tag-list">
      {tags.map((t, index) => (
        <li key={`${t} + ${index}`} className="tags">
          {t}
        </li>
      ))}
    </ul>
  );
}
