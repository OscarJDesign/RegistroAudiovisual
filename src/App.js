import React from 'react';
import RutaA from './components/rutaA';
import RutaB from './components/rutaB';
import RutaC from './components/rutaC';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from './components/dashboard';
import Login from './components/auth/'
import CrearUsuario from './components/crearUsuario';

function App() {
  //COPIO TOKEN LE LOCAL STORAGE
  const token = localStorage.getItem("token");
  return (
    <>

      <Router>
        
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/rutaA" component={RutaA} />
          <Route exact path="/rutaB" component={RutaB} />
          <Route exact path="/rutaC" component={RutaC} />
          <Route exact path="/crearUsuario" component={CrearUsuario} />
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
