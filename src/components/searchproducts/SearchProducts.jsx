
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import styles from './SearchProducts.module.css';

const ProductDetail = ({addItem}) => {
  
  const { search } = useParams();
  const [producto, setProducts] = useState(null);

  const [downloading, setDownloading] = useState(true);
  const [error, setError] = useState(null);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => setError('Error al cargar productos'))
      .finally(() => setDownloading(false));
  }, []);

  if (downloading) return 'Cargando productos...';
  if (error) return error;

let productxs = producto.filter(productx => productx.category === "women's clothing")



  return(
    <>
      <h2>Busqueda de productos por Categoria: "women's clothing" </h2>
      <div className={styles.productsGrid}>

        {productxs.map((product) => (
          <div className={styles.productsCard} key={product.id}>
            
             <Link to={`/productos/${product.id}`} >
           
              <img 
                src={product.image} 
                alt={product.title} 
                className={styles.productsImage} 
              />

              </Link>

            <div className={styles.productsInfo}>
              <div className={styles.productsCategory}>{product.category}</div>
              <h3 className={styles.productsTitle}>{product.title}</h3>
              <p className={styles.PriceCurrent}>$ {product.price}</p>
              
              
            </div>
          </div>
        ))}
        
      </div>

    </>
  );
}

export default ProductDetail;