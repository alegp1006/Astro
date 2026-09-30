import "../styles/listServices.css";

export function ListServices({ services = [] }) {
  return (
    <ul className="list-services">
      {services.map((s, index) => (
        <li className="list-services-item" key={s + index}>
          {s}
        </li>
      ))}
    </ul>
  );
}
