import ilustracionInicio from "../../assets/ilustracionInicio.png";

export const Inicio = () => {
  return (
    <div className="inicio md:flex justify-center">
      <div className="my-auto text-center">
        <h1 className="textoBienvenidos font-black text-white drop-shadow-md text-center px-3">
          Bienvenidos
        </h1>
        <h1 className=" text-white text-3xl">
          Aquí encontrarás un poco sobre mí y <br /> algunos proyectos que he
          realizado.
        </h1>
        <input
          id="enviar"
          type="submit"
          value="Portafolio"
          className="botonPortafolio block font-bold rounded-full text-white p-2 px-5 mx-auto cursor-pointer mt-6 drop-shadow-xl"
        />
      </div>

      <div className="my-auto w-2/5 ml-36 mt-5">
        <img src={ilustracionInicio} />
      </div>
    </div>
  );
};
