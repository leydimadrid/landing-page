import { PortafolioDesarrolloWeb } from "./PortafolioDesarrolloWeb";
import { PortafolioDiseñoGrafico } from "./PortafolioDiseñoGrafico";
import paginaPersonal from "../assets/paginaPersonal.png";

export const Portafolio = () => {
  return (
    <div id="portafolio" className="seccionPortafolio ">
      <div className="text-2xl font-black text-center underline pt-5">
        Portafolio
      </div>

      <PortafolioDiseñoGrafico />
      <h1 className="desarrolloWebHabilidad text-center text-2xl font-bold mt-12 mb-4">
        Desarrollo web
      </h1>
      <PortafolioDesarrolloWeb
      imagen= {paginaPersonal}
      titulo="Figma"
      descripcion="Mockup" />
      <PortafolioDesarrolloWeb
      imagen= {paginaPersonal}
      titulo="Contador"
      descripcion="Primer ejercicio" />
      <PortafolioDesarrolloWeb
      imagen= {paginaPersonal}
      titulo="Lista de tareas"
      descripcion="Crud" />
      <PortafolioDesarrolloWeb
      imagen= {paginaPersonal}
      titulo="Formulario de contacto"
      descripcion="Validación de formulario" />
      <PortafolioDesarrolloWeb
      imagen= {paginaPersonal}
      titulo="App Héroes"
      descripcion="Consumo API Héroes" />
      <PortafolioDesarrolloWeb
      imagen= {paginaPersonal}
      titulo="App Clima"
      descripcion="Consumo API Clima" />
      
    </div>
  );
};
