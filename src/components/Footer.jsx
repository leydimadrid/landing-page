import iconoWhatsapp from "../assets/iconoWhatsapp.png";
import iconoBehance from "../assets/iconoBehance.png";


export const Footer = () => {
  return (
    <div className="pieDePagina flex justify-center items-center">
      <div className="mr-4">
        <img src={iconoWhatsapp} />
      </div>
      <div>
        <img src={iconoBehance} />
      </div>
    </div>
  );
};
