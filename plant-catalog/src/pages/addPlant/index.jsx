import styles from "./addPlant.module.css";

export const AddPlant = () => {
  return (
    <div className={styles.container}>
      <h1>Adicionar Planta</h1>

      <form className={styles.form}>
        <label htmlFor="name">Nome da Planta</label>
        <input id="name" type="text" placeholder="Digite o nome da planta" />

        <label htmlFor="species">Espécie</label>
        <select id="species">
          <option value="">Selecione uma espécie</option>
          <option value="samambaia">Samambaia</option>
          <option value="jiboia">Jiboia</option>
          <option value="espada">Espada-de-São-Jorge</option>
          <option value="suculenta">Suculenta</option>
          <option value="costela">Costela-de-Adão</option>
        </select>

        <label htmlFor="plantingDate">Data de Plantio</label>
        <input id="plantingDate" type="date" />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};
