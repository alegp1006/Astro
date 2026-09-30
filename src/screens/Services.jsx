import { Heading } from "../components/Heading";
import { ServiceCard } from "../components/ServiceCard";
import "../styles/services.css";

export function Services() {
  return (
    <section className="services">
      <Heading
        span={"02 // CATÁLOGO DE SOLUCIONES"}
        h2={"Servicios y Soluciones Digitales"}
        text={"INVERSION TRANSPARENTE // ENTREGA GARANTIZADA"}
      />
      <section className="services-list">
        <ServiceCard
          headerNum={"01"}
          headerText={"GASTRONOMIA & RETAIL"}
          title={"Menú Digital Interactivo & Sistema QR"}
          text={
            "Solución integral para el sector gastronómico, bares, cafeterías y negocios con catálogos dinámicos."
          }
          pricing={"$150 USD"}
          pricingText={"INVERSIÓN ÚNICA // MATERIAL FÍSICO INCLUIDO"}
          linkText={"SOLICITAR MENU QR"}
          linkHref={"#"}
          listServices={[
            "Entrega de material físico: Incluye 10 piezas físicas de soportes/soportes de mesa con el código QR impreso, listas para colocar en mesas o barra.",
            "Código QR dinámico y personalizado, listo también para difusión digital.",
            "Menú web de alta velocidad, diseñado para minimizar el consumo de datos de los usuarios.",
            "Filtros avanzados y exportación en PDF: Permite a los clientes filtrar por categorías/ingredientes y descargar el menú completo en formato PDF para consulta sin conexión.",
            "Soporte offline y persistencia de datos: La información permanece accesible para los clientes incluso ante caídas o inestabilidad de la red.",
            "Categorías estructuradas, imágenes comprimidas de alta resolución, buscador integrado y actualización sencilla de precios o carta.",
            "Enrutamiento directo de pedidos y reservas hacia el WhatsApp corporativo.",
          ]}
        />
        <ServiceCard
          headerNum={"02"}
          headerText={"AUTORIDAD & VENTAS"}
          title={"Landing Page & Sitios Web Corporativos (SPA)"}
          text={
            "Desarrollo web a la medida para marcas personales, profesionales y empresas que buscan proyectar autoridad."
          }
          pricing={"$250 USD"}
          pricingText={"INVERSIÓN ÚNICA // CODIGO 100% PROPIETARIO"}
          linkText={"SOLICITAR PÁGINA WEB"}
          linkHref={"#"}
          listServices={[
            "Diseño UX/UI personalizado, alineado estrictamente a la identidad e imagen de tu marca.",
            "Arquitectura SPA (Single Page Application): navegación fluida, instantánea y libre de recargas molestas.",
            "Integración de botones de conversión directa (contacto por WhatsApp, formularios y enlaces a redes sociales).",
            "Código limpio y optimizado para lograr máxima velocidad de carga en dispositivos móviles y conexiones de ancho de banda limitado.",
          ]}
        />
      </section>
    </section>
  );
}
