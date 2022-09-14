export const ExperienciaPage = () => {
  return (
    <section className="experiencia pb-6">
      <h1 className="text-white text-2xl font-black text-center underline pt-6">
        Experiencia
      </h1>{" "}
      <div className="md:flex justify-center mt-12">
        <div className="bg-white shadow-md rounded-xl w-auto min-w-min px-7 py-4 mx-10 leading-5 mb-2">
          <span className="font-black text-lg block">
            Practicante Preprensa
          </span>
          <span className="font-normal text-md block">
            Microplast - Coldeplast
          </span>
          22 de Julio 2020 - 29 de Enero 2021
        </div>
        <div className="bg-white shadow-md rounded-xl w-auto min-w-min px-7 py-4 mx-10 leading-5 mb-2">
          <span className="font-black text-lg block">
            Diseñadora gráfica y estructural
          </span>
          <span className="font-normal text-md block">
            Cajas y Empaques de Colombia
          </span>
          5 de Abril 2021 - 18 de Agosto 2022
        </div>
      </div>
    </section>
  );
};
