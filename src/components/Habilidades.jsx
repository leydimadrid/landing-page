import animacion from "../assets/animacion.png";
import disenoDigital from "../assets/disenoDigital.png";
import disenoUIUX from "../assets/disenoUIUX.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javaScript.png";
import react from "../assets/react.png";


export const Habilidades = () => {
  return (
    <div className="habilidades">
      <div className="text-2xl font-black text-center underline pt-5">
        Habilidades
      </div> 
      <h1 className="diseñoGraficoHabilidad ml-16 text-2xl font-bold mt-12 mb-4">
        Diseño gráfico
      </h1>
      <div className="h-auto flex flex-cols-3 items-center mb-20">
        <div className="w-auto h-16 mx-auto">
        <div className="md:flex items-center">
        <img className="mx-1" src={animacion} />
          <span className="font-bold text-2xl mr-2">Animación 2D</span>
        </div>
        </div>
        <div className="w-auto h-20 mx-auto">
        <div className="md:flex items-center">
          <img className="mx-1" src={disenoDigital} />
          <span className="font-bold text-2xl mr-2">Diseño digital</span>
        </div>
        </div>
        <div className="w-auto h-20 mx-auto">
        <div className="md:flex items-center">
          <img className="mx-1" src={disenoUIUX} />
          <span className="font-bold text-2xl">Diseño UI/UX</span>
        </div>
        </div>
      </div>
      <h1 className="desarrolloWebHabilidad ml-16 text-2xl font-bold mb-4">
        Desarrollo web
      </h1>
      <div className="h-auto flex flex-cols-4 items-center">
      <div className="w-auto h-16 mx-auto">
        <div className="md:flex items-center">
          {" "}
          <img className="mx-1" src={html} />{" "}
          <span className="font-bold text-2xl mr-2">HTML</span>
        </div>
        </div>
        <div className="w-auto h-16 mx-auto">
        <div className="md:flex items-center">
          <img className="mx-1" src={css} />
          <span className="font-bold text-2xl mr-4">CSS</span>
        </div>
        </div>
        <div className="w-auto h-16 mx-auto">
        <div className="md:flex items-center">
          <img className="mx-1" src={javaScript} />
          <span className="font-bold text-2xl mr-2">JavaScript</span>
        </div>
        </div>
        <div className="w-auto h-20 mx-auto">
        <div className="md:flex items-center">
          <img className="mx-1" src={react} />
          <span className="font-bold text-2xl">React</span>
        </div>
        </div>
      </div>
      </div>
  );
};
