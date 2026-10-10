import { Form } from "../components/Form";
import { FormInfo } from "../components/FormInfo";
import { Heading } from "../components/Heading";
import { Data } from "../data/data";
import "../styles/contact.css";

export function Contact() {
  return (
    <section id="contacto" className="contact">
      <Heading
        span={"04 // CONTACTO & ADQUISICIÓN"}
        h2={"¿LISTO PARA TRANSFORMAR LA PRESENCIA DIGITAL DE TU EMPRESA?"}
        text={"CANAL DIRECTO // ATENCION PERSONALIZADA"}
      />
      <aside className="form-container">
        <FormInfo
          number={`+53 ${Data.phone}`}
          instagram={Data.instagram}
          facebook={Data.facebook}
          gmail={Data.email}
        />
        <Form />
      </aside>
    </section>
  );
}
