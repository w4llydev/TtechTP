import styles from './Header.module.css';

import NavBar from '../navbar/NavBar.jsx';

const Header = () => {
  return (
    <>

    <header className={styles.header}>
       <div className={styles.navbarContainer}>
        <NavBar />
      </div>
    </header >
      
    </>
    
  );
};

export default Header;