import { CardInfo } from "../components/CardInfo";
import { Heading } from "../components/Heading";
import "../styles/whyAstro.css";

export function WhyAstro() {
  return (
    <section className="advantages">
      <Heading
        span={"03 // VENTAJAS TECNOLÓGICAS & ARQUITECTURA"}
        h2={"Por qué nuestra tecnología es diferente (Diferenciales)"}
        text={"DIFERENCIASLES DE INGENIERÍA"}
      />
      <aside className="advantages-section">
        <CardInfo
          headerText={"01 // ARQUITECTURA"}
          title={"Desarrollo sobre Arquitecturas Modernas (React / SPA):"}
          text={
            "Construimos aplicaciones web de página única (SPA) que ofrecen una navegación fluida, continua y sin interrupciones ni recargas molestas de pantalla."
          }
        />
        <CardInfo
          headerText={"02 // ARQUITECTURA"}
          title={"Optimización Extrema de Recursos y Ancho de Banda:"}
          text={
            "Escribimos código limpio y eficiente, con assets comprimidos para garantizar que tus soluciones digitales carguen al instante, consumiendo el mínimo de datos móviles posible."
          }
        />
        <CardInfo
          headerText={"03 // ARQUITECTURA"}
          title={
            "Resiliencia Operativa y Almacenamiento Local (Offline First):"
          }
          text={
            "Tus clientes pueden consultar menús o información relevante incluso durante caídas de red o baja conectividad, gracias a la persistencia de datos local que implementamos."
          }
        />
        <CardInfo
          headerText={"01 // ARQUITECTURA"}
          title={"Integración Física y Digital Llave en Mano:"}
          text={
            "No solo programamos la plataforma digital, sino que facilitamos el despliegue físico operativo (como la entrega de piezas impresas con QR) para que comiences a usar la solución desde el primer día."
          }
        />
        <CardInfo
          headerText={"01 // ARQUITECTURA"}
          title={"Soluciones Escalables:"}
          text={
            "Desarrollamos pensando en el futuro. Cada proyecto está estructurado con bases sólidas para poder integrarle nuevas funcionalidades, servicios o bases de datos a medida que tu negocio crezca."
          }
        />
      </aside>
    </section>
  );
}
