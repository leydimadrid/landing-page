import { HeaderPage } from "./pages/HeaderPage";
import { InicioPage } from "./pages/InicioPage";
import { SobreMiPage } from "./pages/SobreMiPage";
import { HabilidadesPage } from "./pages/HabilidadesPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { Footer } from "./components/Footer";
import { ContactoPage } from "./pages/ContactoPage";


function App() {
  return (
    <div>
      <HeaderPage />
      <InicioPage />
      <SobreMiPage />
      <HabilidadesPage />
      <EstudiosPage />
      <ExperienciaPage />
      <PortafolioPage />
      <ContactoPage />
      <Footer />
    </div>
  );
}

export default App;
