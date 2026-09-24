import "../styles/button.css";

export function Button({ label, activeStyleVariant = false }) {
  return (
    <button className={activeStyleVariant ? "button-white" : "button-black"}>
      {label}
    </button>
  );
}
