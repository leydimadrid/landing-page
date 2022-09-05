import { Habilidades } from "./pages/components/Habilidades";
import { Header } from "./pages/components/Header";
import { Inicio } from "./pages/components/Inicio";
import { SobreMi } from "./pages/components/SobreMi";

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <SobreMi />
      <Habilidades />
    </div>
  );
}

export default App;
