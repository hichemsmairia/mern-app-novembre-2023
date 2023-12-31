// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const handleLogout = () => {
        localStorage.clear()
        
    }
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/add" className={styles.navLink}>Ajouter</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <button   onClick={handleLogout}   style={{ backgroundColor: 'red' }} > se deconnecter </button>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
