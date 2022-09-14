import { TituloPaginas } from "../components/ComponentesReutilizables/TituloPaginas";
import iconoWhatsapp from "../assets/iconoWhatsapp.png";
import iconoBehance from "../assets/iconoBehance.png";

export const ContactamePage = () => {
  return (
    <section id="contacto" className="contacto">
      <TituloPaginas titulo="Contáctame" />
      <div className="mr-4 md:flex justify-center h-96">
        <a href="https://api.whatsapp.com/send?phone=3026230690&text=%C2%A1Hola!%20Leydi%F0%9F%98%80%20Necesito%20%20tus%20servicios%20en" target="_blank">
          <img src={iconoWhatsapp} />
        </a>
      
      
        <a href="https://www.behance.net/SaromaDG" target="_blank">
          <img src={iconoBehance} />
        </a>
      </div>
      
    </section>
  );
};
