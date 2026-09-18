import { Form } from "../components/Form";
import { FormInfo } from "../components/FormInfo";
import { Heading } from "../components/Heading";

export function Contact() {
  return (
    <section>
      <Heading
        span={"04 // CONTACTO & ADQUISICIÓN"}
        h2={"¿LISTO PARA TRANSFORMAR LA PRESENCIA DIGITAL DE TU EMPRESA?"}
        text={"CANAL DIRECTO // ATENCION PERSONALIZADA"}
      />
      <aside>
        <FormInfo
          number={"5354756826"}
          instagram={"instagram"}
          facebook={"facebook"}
          gmail={"gamil"}
        />
        <Form />
      </aside>
    </section>
  );
}
