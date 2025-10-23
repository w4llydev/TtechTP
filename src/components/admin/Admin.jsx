
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from './Admin.module.css';

const Admin = () => {
  
  return(
    <>
      <h2>Pagina del Admin </h2>
      <div className={styles.productsGrid}>
       
      </div>

    </>
  );
}

export default Admin;