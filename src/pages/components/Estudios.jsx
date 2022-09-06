export const Estudios = () => {
  return (
    <div className="estudios">
      <div className="text-white text-2xl font-black text-center underline pt-5">
        Estudios
      </div>{" "}
      <div className="md:flex justify-center mt-12">
        <div className="bg-white drop-shadow-md rounded-xl w-auto min-w-min px-7 py-4 mx-10 leading-3 mb-2">
          <span className="font-black text-lg">Bachiller académico</span> <br/>
          Luis Carlos Galán Sarmiento 2014
        </div>
        <div className="bg-white drop-shadow-md rounded-xl w-auto min-w-min px-7 py-4 mx-10 leading-3 mb-2">
          <span className="font-bold text-md">Tecnóloga en</span> <br/>
          <span className="font-black text-lg">Gestión del Diseño Gráfico</span> <br/>
          Universidad Pascual Bravo 2021
        </div>
      </div>
    </div>
  );
};