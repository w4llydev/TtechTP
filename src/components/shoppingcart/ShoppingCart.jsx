import { useState, useEffect } from 'react';
import styles from './ShoppingCart.module.css';

const ShoppingCart = ({ itemsShoppingCart, productsDeletes }) => {

  if (itemsShoppingCart.length === 0) {
    return null;
  }

  const total = itemsShoppingCart.reduce((sum, product) => sum + product.price, 0);

  return(
    <>
      <h2>Resumen del carrito de compras</h2>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.cartContainer}>
            <div className={styles.cartItems}>
              <div className={styles.cartSummary}>
                 
                <table className={styles.cartTable}>
                  <thead>
                    <tr>
                      <th>PRODUCTO</th>
                      <th>ACCIÓN</th>
                      <th>SUBTOTAL</th>
                    </tr>
                  </thead>

                  <tbody>
                    {itemsShoppingCart.map((product, index) => (
                      <tr className={styles.productRow} key={index}>
                        <td className={styles.productName}>                     
                          <div className={styles.productInfo}>
                            <img 
                              src={product.image} 
                              alt={product.title} 
                              className={styles.productImage}
                              height={100} 
                              width={100} 
                            />
                            <span>{product.title}</span>
                          </div>
                        </td>

                        <td className={styles.productAction}>
                          <button 
                            className={styles.deleteButton}
                            onClick={() => productsDeletes(index)}
                          >
                            Eliminar
                          </button>
                        </td>

                        <td data-label="SUBTOTAL" className={styles.productPrice}>
                          <p>$ {product.price}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <hr className={styles.divider}></hr>

                {/* Sección total y botón en la misma línea */}
                <div className={styles.totalSection}>
                  <div className={styles.totalInfo}>
                    <span className={styles.totalLabel}>TOTAL:</span>
                    <span className={styles.totalAmount}>${total.toFixed(2)}</span>
                  </div>
                  
                  <div className={styles.checkoutSection}>
                    <button className={styles.checkoutButton}>INICIAR COMPRA</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;