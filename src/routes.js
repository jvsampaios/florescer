import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Main/Login';
import Cadastro from './pages/Main/Cadastro';
import PaginaInicial from './pages/Main/Pagina-Inicial';
import Quiz from './pages/Main/Quiz';


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/cadastro" component={Cadastro}/>
        <Route path="/login" component={Login}/>
        <Route path="/pagina inicial" component={PaginaInicial}/>
        <Route path='/quiz' component={Quiz}/>
      </Switch>
    </Router>
  );
}
