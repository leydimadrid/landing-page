import { DiseñoGrafico } from "./ComponentesReutilizables/DiseñoGrafico";
import { DiseñoUiUx } from "./ComponentesReutilizables/DiseñoUiUx";
import { PlantillaTrabajos } from "./ComponentesReutilizables/PlantillaTrabajos";
import { TituloHabilidades } from "./ComponentesReutilizables/TituloHabilidades";
import { TituloPaginas } from "./ComponentesReutilizables/TituloPaginas";
import paginaPersonal from "../assets/paginaPersonal.png";
import listaDeTareas from "../assets/lista-de-tareas.png";
import FormularioDeContacto from "../assets/formulario-de-contacto.png";
import contador from "../assets/contador.png";

export const Portafolio = () => {
  return (
    <div id="portafolio" className="seccionPortafolio ">
      <TituloPaginas titulo="Portafolio" />

      <DiseñoGrafico />
      <DiseñoUiUx />
      <TituloHabilidades titulo="Desarrollo web" />

      <PlantillaTrabajos
        imagen={contador}
        titulo="Contador"
        descripcion="Primer ejercicio"
      />

      <PlantillaTrabajos
        imagen={listaDeTareas}
        titulo="Lista de tareas"
        descripcion="Crud"
      />

      <PlantillaTrabajos
        imagen={FormularioDeContacto}
        titulo="Formulario de contacto"
        descripcion="Validación de formulario"
      />

      <PlantillaTrabajos titulo="App Héroes" descripcion="Consumo API Héroes" />

      <PlantillaTrabajos
        titulo="App Clima"
        descripcion="Consumo API Clima"
      />

      <PlantillaTrabajos
        imagen={paginaPersonal}
        titulo="Landing personal"
        descripcion="Landing"
      />
    </div>
  );
};
