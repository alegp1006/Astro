import { Whatsapp } from "./Icons";

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
            <p>CORREO CORPORATIVO</p>
            <p>{gmail}</p>
          </div>
          <div className="social-media-container">
            <p>TELÉFONO / WHATSAPP</p>
            <p>{number}</p>
          </div>
          <div className="social-media-container">
            <p>SIGUENOS Y CONOCE MÁS</p>
            <div className="social-media-links">
              <a href={instagram}>INSTAGRAM</a>
              <a href={facebook}>FACEBOOK</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" square"></div>
        RESPUESTA EN MENOS DE 24 HORAS HÁBILES
      </div>
    </article>
  );
}
