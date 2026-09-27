import "../styles/solutions.css";
import { Card } from "../components/Card";
import { Heading } from "../components/Heading";
export function Solutions() {
  return (
    <section className="solutions">
      <div className="solutions-container">
        <Heading
          span={"01 // OPTIMIZACIÓN DIGITAL"}
          h2={"Sección de Soluciones y Valor Agregado "}
          text={"ARQUITECTURA & EFICIENCIA DE NEGOCIO"}
        />
        <article className="solutions-article">
          <Card
            headerNum={"01"}
            headerText={"CANAL INDEPENDIENTE"}
            title={"Evolución hacia una infraestructura digital propia"}
            text={
              "Supera las limitaciones de depender únicamente de redes sociales. Construimos plataformas y puntos de contacto digitales estructurados que aportan credibilidad, automatizan la atención y centralizan el flujo de tus clientes."
            }
            tags={["CONTROL TOTAL", "AUTOMATIZACIÓN"]}
          />
          <Card
            headerNum={"02"}
            headerText={"ALTO RENDIMIENTO"}
            title={"Rendimiento de software y velocidad de carga"}
            text={
              "Las fallas de rendimiento y la lentitud en la navegación provocan pérdidas directas de conversión. Implementamos arquitecturas web ligeras y optimizadas para garantizar un procesamiento fluido y un consumo mínimo de datos móviles."
            }
            tags={["SUB-SECONF", "AHORRO DE DATOS"]}
          />
          <Card
            headerNum={"03"}
            headerText={"ALMACENAMIENTO TOTAL"}
            title={"Resiliencia ante fallas de red y soporte offline"}
            text={
              "Garantizamos la continuidad operativa mediante el almacenamiento local de datos. Nuestras aplicaciones están diseñadas para registrar información y permitir la consulta de contenidos incluso en situaciones de desconexión o inestabilidad de red, resguardando los datos del usuario."
            }
            tags={["OFFLINE-FIRST", "PERSITENCIA LOCAL"]}
          />
          <Card
            headerNum={"04"}
            headerText={"CONVERSIÓN DIRECTA"}
            title={"Experiencia de usuario (UX/UI) orientada a la conversión"}
            text={
              "Simplificamos la interacción del cliente eliminando fricciones en el proceso. Desarrollamos interfaces intuitivas —desde sitios corporativos hasta sistemas dinámicos como menús digitales— diseñadas para convertir visitas en interacciones efectivas."
            }
            tags={["CERO FRICCION", "DISEÑO INTUITIVO"]}
          />
          <Card
            headerNum={"05"}
            headerText={"DESARROLLO INTEGRAL"}
            title={"Desarrollo integral de software End-to-End"}
            text={
              "Eliminamos los errores de integración y falta de coherencia al delegar diseño y código a diferentes proveedores. En Astro asumimos el ciclo completo del proyecto: diseño de interfaz, desarrollo de código a la medida y despliegue técnico."
            }
            tags={["DISEÑO UI/UX", "FRONTEND & BACKEND", "DESPLIEGUE TECNICO"]}
          />
        </article>
      </div>
    </section>
  );
}
