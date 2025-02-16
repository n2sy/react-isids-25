import React from "react";
import styles from "./navbar.module.css";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li><Link to="all">All Books</Link></li>
        <li>
            {/* <Link to="favourites">Favourites</Link> */}
            <NavLink to="/favourites">
                {
                    ({isActive}) => {
                        console.log(isActive);
                        
                        return <span className={isActive ? styles.activeclasse : null}>Favourites</span>
                    }
                }
            </NavLink>
            
            </li>
        <li><Link to="login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
