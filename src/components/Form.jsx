import { useForm } from "../hooks/useForm";
import "../styles/form.css";

export function Form() {
  const { formData, handleChangeForm, handleSendEmail } = useForm();
  return (
    <form className="form" onSubmit={handleSendEmail}>
      <label className="label">
        <p className="label-text">01 // NOMBRE COMPLETO / NEGOCIO</p>
        <input
          value={formData.name}
          onChange={handleChangeForm}
          placeholder="joe Doe..."
          className="input"
          type="text"
          name="user-name"
          maxLength={50}
          min={3}
        />
      </label>
      <label className="label">
        <p className="label-text">02 // CORREO CORPORATIVO</p>
        <input
          value={formData.email}
          onChange={handleChangeForm}
          className="input"
          type="email"
          name="email"
          placeholder="example@gmail.com"
        />
      </label>
      <div className="label">
        <p className="label-text">03 // SELECCIÓN DE SOLUCIÓN / MENSAJE</p>
        <textarea
          value={formData.message}
          onChange={handleChangeForm}
          name="message"
          className="textarea"
          maxLength={300}
          placeholder="escriba su mensaje aqui.."
        />
      </div>
      <button className="form-button" type="submit">
        ENVIAR SOLICITUD
      </button>
    </form>
  );
}
