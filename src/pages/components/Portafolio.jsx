import Cultivos1 from "../../assets/Cultivos-1.png";
import Cultivos2 from "../../assets/Cultivos-2.png";
import Cultivos3 from "../../assets/Cultivos-3.png";
import AficheStand from "../../assets/AficheStand.png";
import PiezaAncheta from "../../assets/PiezaAncheta.png";
import PiezaVelas from "../../assets/PiezaVelas.png";

export const Portafolio = () => {
  return (
    <div><div className="text-2xl font-black text-center underline pt-5">
    Portafolio
  </div> 
  <h1 className="diseñoGraficoHabilidad ml-16 text-2xl font-bold mt-12 mb-4">
        Diseño gráfico
      </h1>
      <div className="flex justify-center mx-5">
        <div className="Cultivos"><img src={Cultivos1} /></div>
        <div className="Cultivos mx-4 "><img src={Cultivos2} /></div>
        <div className="Cultivos"><img src={Cultivos3} /></div>
      </div>
      <div className="flex justify-center mx-5 mt-6">
        <div className="w-auto "><img src={AficheStand} /></div>
        <div className="flex flex-col">
        <div className="w-auto mx-10 mb-3"><img src={PiezaAncheta} /></div>
        <div className="w-auto mx-10"><img src={PiezaVelas} /></div>
        </div>
        
      </div>
      </div>
  )
}
