import styles from "./listPlants.module.css";
import { BASE_URL_API } from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const ListPlants = () => {
  const [data, setData] = useState([]);

  const listDataPlants = async () => {
    const res = await fetch(`${BASE_URL_API}`);
    const response = await res.json();
    setData(response.data);
  };

  useEffect(() => {
    listDataPlants();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.list_plants}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.list_items}>
                <Link to={`/plantsId/${item.id}`} className={styles.link}>
                  <img src={item.image_url} alt="" width={200} />
                  <h2>{item.scientific_name}</h2>
                  <br />
                  <button className={styles.btn_info}>Mais informações</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
