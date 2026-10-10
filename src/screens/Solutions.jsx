import "../styles/solutions.css";
import { Card } from "../components/Card";
import { Heading } from "../components/Heading";
export function Solutions() {
  return (
    <section id="soluciones" className="solutions">
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
            title={"Adiós a la dependencia de las redes sociales"}
            text={
              "Tener solo Instagram o Facebook te expone a perder clientes si te bloquean la cuenta o si el usuario no tiene red social. Te creamos tu propia casa digital, profesional y siempre disponible."
            }
            tags={["CONTROL TOTAL", "AUTOMATIZACIÓN"]}
          />
          <Card
            headerNum={"02"}
            headerText={"ALTO RENDIMIENTO"}
            title={"Carga instantánea y ahorro de datos"}
            text={
              "Si tu web tarda en cargar, el cliente la cierra y perdiste una venta. Construimos plataformas ultra ligeras diseñadas para gastar el mínimo de megas de tus clientes."
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
            title={"Ventas directas a tu WhatsApp"}
            text={
              "Eliminamos intermediarios. Cada pedido, reserva o consulta llega directamente estructurado a tu chat de WhatsApp listo para concretar."
            }
            tags={["CERO FRICCION", "DISEÑO INTUITIVO"]}
          />
          <Card
            headerNum={"05"}
            headerText={"DESARROLLO INTEGRAL"}
            title={"Servicio Llave en Mano"}
            text={
              "Nos encargamos de todo: desde el diseño y la programación hasta la entrega. Tu negocio queda listo para operar desde el primer día."
            }
            tags={["DISEÑO UI/UX", "FRONTEND & BACKEND", "DESPLIEGUE TECNICO"]}
          />
        </article>
      </div>
    </section>
  );
}
