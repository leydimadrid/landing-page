import ilustracioninicio from "../assets/ilustracion-inicio.svg";

export const InicioPage = () => {
  return (
    <section id="inicio" className="inicio md:flex justify-center md:pt-24 pt-72">
      <div className="my-auto mx-auto">
        <h1 className="text-5xl md:text-8xl text-white text-center">
          Bienvenidos
        </h1>
        <h3 className=" text-white text-md md:text-3xl text-center">
          Aquí encontrarás un poco sobre mí y{" "}
          <span className="block">algunos proyectos que he realizado.</span>
        </h3>
        <a href="#portafolio">
          <button className="botonPortafolio block font-bold rounded-full text-white p-2 px-5 mx-auto cursor-pointer mt-4 mb-12 shadow-xl">
            Portafolio
          </button>
        </a>
      </div>

      <div className="mx-auto w-11/12 md:w-2/5 mt-6 pb-6">
        <img src={ilustracioninicio} />
      </div>
    </section>
  );
};
