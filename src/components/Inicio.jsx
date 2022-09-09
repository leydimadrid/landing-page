import ilustracioninicio from "../assets/ilustracion-inicio.png";

export const Inicio = () => {
  return (
    <div className="inicio md:flex justify-center">
      <div className="my-auto text-center mx-auto">
        <h1 className="textoBienvenidos text-7xl text-white text-center px-3">
          Bienvenidos
        </h1>
        <h3 className=" text-white text-2xl">
          Aquí encontrarás un poco sobre mí y <span className="block">algunos proyectos que he
          realizado.</span> 
        </h3>
        <input
          id="enviar"
          type="submit"
          value="Portafolio"
          className="botonPortafolio block font-bold rounded-full text-white p-2 px-5 mx-auto cursor-pointer mt-6 shadow-xl"
        />
      </div>

      <div className="my-auto mx-auto">
        <img src={ilustracioninicio} />
      </div>
    </div>
  );
};
