import { PlantillaTrabajos } from "../ComponentesReutilizables/PlantillaTrabajos";
import { TituloHabilidades } from "../ComponentesReutilizables/TituloHabilidades";
import mockupFigma from "../../assets/mockup-figma.png";

export const DiseñoUiUx = () => {
  return (
    <>
      <TituloHabilidades titulo="Diseño UI/UX" />
      <PlantillaTrabajos
        imagen={mockupFigma}
        titulo="Figma"
        descripcion="Mockup"
      />
    </>
  );
};
