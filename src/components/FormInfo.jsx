import { Whatsapp } from "./Icons";
import "../styles/formInfo.css";

export function FormInfo({ number, gmail, instagram, facebook }) {
  return (
    <article className="form-info">
      <div className="form-info-data">
        <p className="form-info-text">
          Convierte tus visitas en clientes con infraestructura web rápida,
          confiable y adaptada a las necesidades operativas de tu negocio.
        </p>
        <div className="form-info-link">
          <a href="">INICIAR PROYECTO VÍA WHATSAPP</a>
          <Whatsapp />
        </div>
        <div className="form-info-social-media">
          <div className="social-media-container">
            <p className="social-media-title">CORREO CORPORATIVO</p>
            <p className="social-media-link">{gmail}</p>
          </div>
          <div className="social-media-container">
            <p className="social-media-title">TELÉFONO / WHATSAPP</p>
            <p className="social-media-link">{number}</p>
          </div>
          <div className="social-media-container">
            <p className="social-media-title">SIGUENOS Y CONOCE MÁS</p>
            <div className="social-media-links">
              <a href={instagram}>INSTAGRAM</a>
              <a href={facebook}>FACEBOOK</a>
            </div>
          </div>
        </div>
      </div>
      <div className="margin-form-info">
        <div className=" square"></div>
        <p>RESPUESTA EN MENOS DE 24 HORAS HÁBILES</p>
      </div>
    </article>
  );
}
