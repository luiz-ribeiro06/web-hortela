import { useState } from "react";
import styles from "./addPlant.module.css";

export const AddPlant = () => {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [dataPlantio, setDataPlantio] = useState("");

  const getFrequency = (species) => {
    const frequencies = {
      samambaia: 2,
      jiboia: 7,
      espada: 14,
      suculenta: 14,
      costela: 5,
    };

    return frequencies[species];
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Enviando planta...");

  const response = await fetch(
    "https://jardim-verde-hatl.onrender.com/myPlants",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        especie,
        dataPlantio,
        frequenciaRega: getFrequency(especie),
      }),
    }
  );

  console.log(response.status);

  alert("Planta cadastrada!");
};

  return (
    <div className={styles.container}>
      <h1>Adicionar Planta</h1>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <label>Nome da Planta</label>

        <input
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

        <label>Espécie</label>

        <select
          value={especie}
          onChange={(e) =>
            setEspecie(e.target.value)
          }
        >
          <option value="">
            Selecione
          </option>

          <option value="samambaia">
            Samambaia
          </option>

          <option value="jiboia">
            Jiboia
          </option>

          <option value="espada">
            Espada-de-São-Jorge
          </option>

          <option value="suculenta">
            Suculenta
          </option>

          <option value="costela">
            Costela-de-Adão
          </option>
        </select>

        <label>Data de Plantio</label>

        <input
          type="date"
          value={dataPlantio}
          onChange={(e) =>
            setDataPlantio(e.target.value)
          }
        />

        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
};
