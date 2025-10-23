
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(respuesta => respuesta.json())
      .then(dato => setProducto(dato));
  },[id]);

  if(!producto)
    return <p>Cargando ......</p>

   return(
    <>
      <h2>Detalle del producto:</h2>
      <div className={styles.productsGrid}>
          <div className={styles.productsCard} key={producto.id}>
             
              <img 
                src={producto.image} 
                alt={producto.title} 
                className={styles.productsImage} 
              />

            <div className={styles.productsInfo}>
              <div className={styles.productsCategory}>{producto.category}</div>
              <h3 className={styles.productsTitle}>{producto.title}</h3>
              <h3 className={styles.productsDescription}>{producto.description}</h3>
              <p className={styles.PriceCurrent}>$ {producto.price}</p>
              
            </div>
            </div>
          </div>
    </>
  );
}

export default ProductDetail;