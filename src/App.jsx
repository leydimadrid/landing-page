import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { SobreMi } from "./components/SobreMi";
import { Habilidades } from "./components/Habilidades";
import { Estudios } from "./components/Estudios";
import { Experiencia } from "./components/Experiencia";
import { Portafolio } from "./components/Portafolio";
import { Footer } from "./components/Footer";
import { Contacto } from "./components/Contacto";

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
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
