import { Link } from "react-router-dom";

import styles from './NavBar.module.css'; 


const NavBar = () => {
  return(
    <nav>
      <ul className={styles.lista}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>Inicio</Link>
          <Link to="/Search" className={styles.link}>Buscar</Link>
          <Link to="/Admin" className={styles.link}>Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;