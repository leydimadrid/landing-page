import fotoLeydi from "../../assets/fotoLeydi.png";

export const SobreMi = () => {
  return (
    <div className="mt-5">
      <div className="text-2xl font-black text-center underline">Sobre mí</div>
      <div className="sobreMi md:flex">
        <div className="w-2/6">
          <img src={fotoLeydi} />
        </div>

        <div className="my-auto text-left mx-auto">
          <h1 className="saludoHola font-black text-white text-3xl text-left">
            ¡Hola!
          </h1>
          <h1 className="font-black text-black text-3xl text-left">
            Mi nombre es Leydi
          </h1>
          <p className=" text-black text-2xl text-justify">
            Soy <span className="font-black">diseñadora gráfica </span> y{" "}
            <span className="font-black"> desarrolladora web, </span> <br />{" "}
            apasionada por el diseño en todas sus formas, me <br /> considero
            una persona dedicada, responsable, <br /> honesta, respetuosa y me
            encanta la idea de <br /> adquirir nuevos conocimientos que
            fortalezcan mi <br />
            carrera y mi vida personal.
          </p>
        </div>
      </div>
    </div>
  );
};
