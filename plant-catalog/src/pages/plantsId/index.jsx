import styles from "./plantsId.module.css";
import { BASE_URL_API } from "../../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export const PlantsId = () => {
  const [loaded, setLoaded] = useState(false);
  const [itemId, setItemId] = useState([]);
  const { id } = useParams();

  const getItemId = async () => {
    setLoaded(true);
    const res = await fetch(`${BASE_URL_API}/${id}`);
    const response = await res.json();
    setLoaded(false);
    setItemId(response.data);
  };
  useEffect(() => {
    getItemId();
  }, []);

  return (
    <>
      {loaded && <h3>Aguarde...</h3>}

      <ul className={styles.ul}>
        <div className={styles.info}>
          <img src={itemId.image_url} alt="" width={200} /> <br />
          <h2>{itemId.scientific_name}</h2>
          <br />
          <p>{itemId.family?.name}</p>
          <h3>{itemId.genus?.name}</h3>
          <h4>{itemId.author}</h4>
          <h5>{itemId.year}</h5>
        </div>
      </ul>
    </>
  );
};
