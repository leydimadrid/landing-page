import Cultivos1 from "../../assets/Cultivos-1.png";
import Cultivos2 from "../../assets/Cultivos-2.png";
import Cultivos3 from "../../assets/Cultivos-3.png";
import AficheStand from "../../assets/AficheStand.png";
import PiezaAncheta from "../../assets/PiezaAncheta.png";
import PiezaVelas from "../../assets/PiezaVelas.png";
import { TituloHabilidades } from "./TituloHabilidades";

export const DiseñoGrafico = () => {
  return (
    <>
      <TituloHabilidades titulo="Diseño gráfico" />
      <section className="flex justify-center mx-5">
        <div className="Cultivos">
          <img src={Cultivos1} />
        </div>
        <div className="Cultivos mx-4 ">
          <img src={Cultivos2} />
        </div>
        <div className="Cultivos">
          <img src={Cultivos3} />
        </div>
      </section>
      <section className="flex justify-center mx-5 mt-6">
        <div>
          <img className="md:mr-16" src={AficheStand} />
        </div>
        <div className="flex flex-col w-auto md:w-auto">
          <img className="mb-1 md:mb-3" src={PiezaAncheta} />

          <img src={PiezaVelas} />
        </div>
      </section>
    </>
  );
};
