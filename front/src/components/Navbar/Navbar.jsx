import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <Fragment>
      <nav className="container-fluid nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
         <a href="/" title="accueil" className="a_deco">Arrosage intelligent</a>
         
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
        <NavLink to="/" className={props.classNameAccueil} title="accueil">Accueil</NavLink>
        <NavLink to="/parametre" className={props.classNameParametre} title="parametre">Paramétre</NavLink>
        <NavLink to="/login" className={props.classNameLogin} title="login">Login</NavLink>
        </div>
      </nav>
    </Fragment>
  );
}
