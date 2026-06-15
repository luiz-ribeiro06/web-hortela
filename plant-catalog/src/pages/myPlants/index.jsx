import { useEffect, useState } from "react";
import styles from "./myPlants.module.css";

export const MyPlants = () => {
  const [plants, setPlants] = useState([]);

useEffect(() => {
  const fetchPlants = async () => {
    const res = await fetch(
      "http://localhost:3001/myPlants"
    );

    const data = await res.json();

    setPlants(data);
  };

  fetchPlants();
}, []);

  return (
    <div className={styles.container}>
      <h1>Minhas Plantas</h1>

      {plants.map((plant) => (
        <div key={plant._id}>
          <h2>{plant.nome}</h2>
          <p>{plant.especie}</p>
        </div>
      ))}
    </div>
  );
};

// One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.