import styles from "./about.module.css";
export const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre</h1>

      <p>
        O Jardim Verde é um catálogo dedicado a plantas domésticas, oferecendo
        informações sobre espécies ideais para ambientes internos e
        residenciais.
      </p>

      <p>
        O site permite explorar diferentes plantas, conhecer suas
        características e descobrir cuidados importantes para mantê-las
        saudáveis dentro de casa.
      </p>

      <h2>Objetivo</h2>

      <p>
        Nosso objetivo é facilitar o acesso a informações sobre plantas
        domésticas, ajudando iniciantes e entusiastas da jardinagem a escolher e
        cuidar melhor de suas plantas.
      </p>

      <h2>Tecnologias Utilizadas</h2>

      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>CSS Modules</li>
        <li>API de plantas</li>
        <li>MongoDB</li>
      </ul>

      <h2>Autoria</h2>

      <p>Projeto desenvolvido por Júlia Vitória e Luiz Eduardo.</p>
    </div>
  );
};
