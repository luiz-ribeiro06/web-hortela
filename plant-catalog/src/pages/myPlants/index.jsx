import { useEffect, useState } from "react";
import styles from "./myPlants.module.css";

export const MyPlants = () => {
  const [plants, setPlants] = useState([]);

  const loadPlants = async () => {
    const res = await fetch("https://jardim-verde-hatl.onrender.com/myPlants");
    const data = await res.json();
    setPlants(data);
  };

  useEffect(() => {
    loadPlants();
  }, []);

  const deletePlant = async (id) => {
    await fetch(`https://jardim-verde-hatl.onrender.com/myPlants/${id}`, {
      method: "DELETE",
    });

    loadPlants();
  };

  const waterPlant = async (id) => {
    await fetch(`https://jardim-verde-hatl.onrender.com/myPlants/${id}/water`, {
      method: "PUT",
    });

    loadPlants();
  };

  const editPlant = async (plant) => {
    const novoNome = prompt("Novo nome:", plant.nome);

    if (!novoNome) return;

    await fetch(`https://jardim-verde-hatl.onrender.com/myPlants/${plant._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...plant,
        nome: novoNome,
      }),
    });

    loadPlants();
  };

  return (
    <div className={styles.container}>
      <h1>Minhas Plantas</h1>

      {plants.map((plant) => (
        <div key={plant._id} className={styles.plantCard}>
          <h2>{plant.nome}</h2>

          <p>
            <strong>Espécie:</strong> {plant.especie}
          </p>

          <p>
            <strong>Plantada em:</strong>{" "}
            {new Date(plant.dataPlantio).toLocaleDateString()}
          </p>

          <p>
            <strong>Última rega:</strong>{" "}
            {plant.ultimaRega
              ? new Date(plant.ultimaRega).toLocaleDateString()
              : "Nunca"}
          </p>

          <p>
            <strong>Frequência:</strong> {plant.frequenciaRega} dias
          </p>

          <button onClick={() => waterPlant(plant._id)}>
            Regar
          </button>

          <button onClick={() => editPlant(plant)}>
            Editar
          </button>

          <button onClick={() => deletePlant(plant._id)}>
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
};

// One Ring to rule them all, One Ring to find them,
// One Ring to bring them all and in the darkness bind them.
