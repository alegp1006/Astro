export function ListServices({ services = [] }) {
  return services.map((s, index) => (
    <li className="list-sevices" key={s + index}>
      {s}
    </li>
  ));
}
