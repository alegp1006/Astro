export function Tags({ tags }) {
  return tags.map((t) => <p className="tags">{t}</p>);
}
