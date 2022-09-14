import { DiseñoGrafico } from "../Components/ComponentesReutilizables/DiseñoGrafico";
import { PlantillaTrabajosVistaPrevia } from "../components/ComponentesReutilizables/PlantillaTrabajosVistaPrevia";
import { PlantillaTrabajosWeb } from "../components/ComponentesReutilizables/PlantillaTrabajosWeb";
import { TituloHabilidades } from "../Components/ComponentesReutilizables/TituloHabilidades";
import { TituloPaginas } from "../Components/ComponentesReutilizables/TituloPaginas";
import { ProyectosUIUX } from "../database/ProyectosUIUX";
import { proyectosDesarrolloWeb } from "../database/proyectosDesarrolloWeb";
import { ProyectoLanding } from "../database/ProyectoLanding";
import { PlantillaTrabajosGithub } from "../components/ComponentesReutilizables/PlantillaTrabajosGithub";


export const PortafolioPage = () => {
  return (
    <section id="portafolio" className="seccionPortafolio ">
      <TituloPaginas titulo="Portafolio" />

      <DiseñoGrafico />
      <TituloHabilidades titulo="Diseño UI/UX" />

      {ProyectosUIUX.map((proyecto) => (
        <PlantillaTrabajosVistaPrevia
          key={proyecto.id}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          urlvistaprevia={proyecto.urlvistaprevia}
        />
      ))}
      <TituloHabilidades titulo="Desarrollo web" />

      {ProyectoLanding.map((proyecto) => (
        <PlantillaTrabajosGithub
          key={proyecto.id}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          urlgithub={proyecto.urlgithub}
        />
      ))}

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
    </section>
  );
};
