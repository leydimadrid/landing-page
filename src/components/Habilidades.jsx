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
      <h1 className="diseñoGraficoHabilidad text-2xl font-bold mt-12 mb-4 text-center">
        Diseño gráfico
      </h1>
      <div className="flex flex-cols-3 mx-4 items-center mb-14 pt-7">
        <div className="mx-auto">
        <div className="md:flex items-center text-center">
        <img className="mx-auto" src={animacion} />
          <span className="font-bold text-xl md:text-2xl">Animación 2D</span>
        </div>
        </div>
        <div className="mx-auto">
        <div className="md:flex items-center text-center">
          <img className="mx-auto" src={disenoDigital} />
          <span className="font-bold text-xl md:text-2xl">Diseño digital</span>
        </div>
        </div>
        <div className="mx-auto">
        <div className="md:flex items-center text-center">
          <img className="mx-auto" src={disenoUIUX} />
          <span className="font-bold text-xl md:text-2xl">Diseño UI/UX</span>
        </div>
        </div>
      </div>
      <h1 className="desarrolloWebHabilidad text-2xl font-bold mb-4 text-center">
        Desarrollo web
      </h1>
      <div className="flex flex-cols-4 mx-4 items-center pb-7">
      <div className="mx-auto">
        <div className="md:flex items-center text-center">
          {" "}
          <img className="mx-auto" src={html} />{" "}
          <span className="font-bold text-xl md:text-2xl">HTML</span>
        </div>
        </div>
        <div className="mx-auto">
        <div className="md:flex items-center text-center">
          <img className="mx-auto" src={css} />
          <span className="font-bold text-xl md:text-2xl">CSS</span>
        </div>
        </div>
        <div className="mx-auto">
        <div className="md:flex items-center  text-center">
          <img className="mx-auto" src={javaScript} />
          <span className="font-bold text-xl md:text-2xl">JavaScript</span>
        </div>
        </div>
        <div className="mx-auto">
        <div className="md:flex items-center text-center">
          <img className="mx-auto" src={react} />
          <span className="font-bold text-xl md:text-2xl">React</span>
        </div>
        </div>
      </div>
      </div>
  );
};
