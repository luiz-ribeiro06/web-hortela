import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Menu } from "./components/menu";
import { AddPlant } from "./pages/addPlant";
import { ListPlants } from "./pages/listPlants";
import { PlantsId } from "./pages/plantsId";
import { MyPlants } from "./pages/myPlants";
import styles from "./App.module.css";
function App() {
  return (
    <BrowserRouter>
      <div className={styles.header}>
        <Menu />

        <h1>JARDIM VERDE</h1>

        <input type="text" placeholder="Pesquisar planta..." />
      </div>

      <Routes>
        <Route index element={<ListPlants />} />
        <Route path="/plantsId/:id" element={<PlantsId />} />
        <Route path="/about" element={<About />} />
        <Route path="/addPlant" element={<AddPlant />} />
        <Route path="/myPlants" element={<MyPlants />} />
      </Routes>

      <footer className={styles.footer}>
        <p>
          Jardim Verde © 2026 | Informações sobre plantas domésticas e
          jardinagem.
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
