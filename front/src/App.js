import React, {useState} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Accueil from "./components/accueil/Accueil";
import LoginPage from './components/login/Login';
import AdminPage from './components/Admin/Admin';
import Parametre from './components/Parametre/Parametre';
import Meteo from './components/Meteo/Meteo';

const App =()=>{
  
  const [isLogged, setIsLogged] = useState(false);
  const [redirectToAdminPage, setRedirectToAdminPage] = useState(false);


  // fonction pour mettre à jour isLogged et redirectToAdminPage dans le state de App.js,
  // cette fonction est passée en props au composant LoginPage pour que ce même composant puisse déclencher cette fonction
  const updateLogin = () => {
    setIsLogged(true);
    setRedirectToAdminPage(true);
  };

    return (
      <>
      
        {redirectToAdminPage && <Redirect to="/admin" />}
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/parametre" component={Parametre} />
          <Route exact path="/meteo" component={Meteo} />
          <Route exact path="/login" component={() => <LoginPage updateFunction={updateLogin} />} />
          {isLogged ? <Route exact path="/admin" component={AdminPage} /> : <Redirect to="/" />}
          </Switch> 
      </>   
    )
  }


export default App;
