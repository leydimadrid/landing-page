import { useNavigate } from "react-router-dom";
import ilustracioninicio from "../assets/ilustracion-inicio.svg";

export const Inicio = () => {

  const navigate = useNavigate();


  const portafolio = () => {
    navigate ("/portafolio");
  }

  return (
    <div className="inicio md:flex justify-center">
      <div2 className="my-auto mx-auto">
        <h1 className="text-5xl md:text-8xl text-white text-center">
          Bienvenidos
        </h1>
        <h3 className=" text-white text-md md:text-3xl text-center">
          Aquí encontrarás un poco sobre mí y <span className="block">algunos proyectos que he
          realizado.</span> 
        </h3>
        <button onClick={portafolio} className="botonPortafolio block font-bold rounded-full text-white p-2 px-5 mx-auto cursor-pointer mt-4 mb-12 shadow-xl">Portafolio</button>
      </div2>

      <div className="mx-auto w-11/12 md:w-2/5 mt-6 pb-6">
        <img src={ilustracioninicio} />
      </div>
    </div>
  );
};
