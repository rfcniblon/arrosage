import React, { Fragment } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Meteo from "../Meteo/Meteo";
import MeteoApi from "../Meteo/MeteoApi";

const Accueil = () => {

  return (
    <Fragment>
      <Navbar classNameAccueil="textdeco" />
      <div className="mt70">
        <Meteo />
        <MeteoApi />
      </div>
      <Footer />
    </Fragment>
  );
}


export default Accueil;
