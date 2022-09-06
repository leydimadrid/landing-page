import { Estudios } from "./pages/components/Estudios";
import { Experiencia } from "./pages/components/Experiencia";
import { Habilidades } from "./pages/components/Habilidades";
import { Header } from "./pages/components/Header";
import { Inicio } from "./pages/components/Inicio";
import { Portafolio } from "./pages/components/Portafolio";
import { SobreMi } from "./pages/components/SobreMi";

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Estudios />
      <Experiencia />
      <Portafolio />
    </div>
  );
}

export default App;
