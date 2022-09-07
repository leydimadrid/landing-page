import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { SobreMi } from "./components/SobreMi";
import { Habilidades } from "./components/Habilidades";
import { Estudios } from "./components/Estudios";
import { Experiencia } from "./components/Experiencia";
import { Portafolio } from "./components/Portafolio";
import { Contactame } from "./components/Contactame";
import { Footer } from "./components/Footer";

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
      <Contactame />
      <Footer />
    </div>
  );
}

export default App;
