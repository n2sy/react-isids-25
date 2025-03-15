import React, { useContext } from "react";
import styles from "./navbar.module.css";
import { Link, NavLink } from "react-router";
import { LoginContext } from "../store/LoginContext";

function Navbar() {
    let logCtx = useContext(LoginContext);
    
    if(logCtx.isLogged){
        if(logCtx.role == "user") 
            return (
                <div className={styles.header}>
                  <div className={styles.logo}>Book Shop</div>
                  <ul>
                    <li>
                      <Link to="/">Accueil</Link>
                    </li>
                    <li><Link to="all">All-Books</Link></li>
                    <li><Link to="add">Add </Link></li>
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
                        <li><Link to="/">Logout</Link></li>
                        </ul>
                </div>
              );
            else  return (
                <div className={styles.header}>
                  <div className={styles.logo}>Book Shop</div>
                  <ul>
                    <li>
                      <Link to="/">Accueil</Link>
                    </li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/authors">Authors </Link></li>
                    <li><Link to="/">Logout</Link></li>
                  </ul>
                </div>
              );
    } 
    else
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Book Shop</div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li><Link to="login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
