import "../styles/form.css";

export function Form() {
  return (
    <form className="form">
      <label className="label">
        <p className="label-text">01 // NOMBRE COMPLETO / NEGOCIO</p>
        <input placeholder="ej. felicity solar" className="input" type="text" />
      </label>
      <label className="label">
        <p className="label-text">
          02 // CORREO CORPORATIVO O TELEFONO DE CONTACTO
        </p>
        <input className="input" type="text" />
      </label>
      <label className="label">
        <p className="label-text">03 // SELECCIÓN DE SOLUCIÓN / MENSAJE</p>
        <textarea className="textarea" />
      </label>
      <button className="form-button" type="submit">
        ENVIAR SOLICITUD
      </button>
    </form>
  );
}
