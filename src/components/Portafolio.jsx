import { PortafolioDesarrolloWeb } from "./PortafolioDesarrolloWeb";
import { PortafolioDiseñoGrafico } from "./PortafolioDiseñoGrafico";

export const Portafolio = () => {
  return (
    <div className="seccionPortafolio ">
      <div className="text-2xl font-black text-center underline pt-5">
        Portafolio
      </div>

      <PortafolioDiseñoGrafico />
      <h1 className="desarrolloWebHabilidad text-center text-2xl font-bold mt-12 mb-4">
        Desarrollo web
      </h1>
      <PortafolioDesarrolloWeb />
      <PortafolioDesarrolloWeb />
    </div>
  );
};
