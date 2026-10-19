import "../styles/button.css";

export function Button({ label, activeStyleVariant = false, href }) {
  return (
    <a
      href={href}
      className={activeStyleVariant ? "button-white" : "button-black"}>
      {label}
    </a>
  );
}
