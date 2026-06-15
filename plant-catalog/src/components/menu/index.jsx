import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/addPlant">Adicionar Planta</Link>
        <Link to="/myPlants">Minhas Plantas</Link>
      </div>
    </>
  );
};
