import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

const Products = ({addItem}) => {
  const [products, setProducts] = useState([]);
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

  return(
    <>
      <h2>Productos</h2>
      <div className={styles.productsGrid}>

        {products.map((product) => (
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
              
              <div className={styles.productActions}>
                <button 
                  onClick={() => addItem(product)}
                  className={styles.btnCart}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>

    </>
  );
};

export default Products;