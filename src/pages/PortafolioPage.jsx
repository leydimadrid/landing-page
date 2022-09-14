import { DiseñoGrafico } from "../Components/ComponentesReutilizables/DiseñoGrafico";
import { PlantillaTrabajosUIUX } from "../components/ComponentesReutilizables/PlantillaTrabajosUIUX";
import { PlantillaTrabajosWeb } from "../components/ComponentesReutilizables/PlantillaTrabajosWeb";
import { TituloHabilidades } from "../Components/ComponentesReutilizables/TituloHabilidades";
import { TituloPaginas } from "../Components/ComponentesReutilizables/TituloPaginas";
import { proyectosDesarrolloWeb } from "../database/proyectosDesarrolloWeb";
import { ProyectosUIUX } from "../database/ProyectosUIUX";

export const PortafolioPage = () => {
  return (
    <div id="portafolio" className="seccionPortafolio ">
      <TituloPaginas titulo="Portafolio" />

      <DiseñoGrafico />
      <TituloHabilidades titulo="Diseño UI/UX" />

      {ProyectosUIUX.map((proyecto) => (
        <PlantillaTrabajosUIUX
          key={proyecto.id}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          urlvistaprevia={proyecto.urlvistaprevia}
        />
      ))}
      <TituloHabilidades titulo="Desarrollo web" />

      {proyectosDesarrolloWeb.map((proyecto) => (
        <PlantillaTrabajosWeb
          key={proyecto.id}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          urlvistaprevia={proyecto.urlvistaprevia}
          urlgithub={proyecto.urlgithub}
        />
      ))}
    </div>
  );
};
