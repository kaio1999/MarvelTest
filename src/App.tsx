import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import Hero from '../src/pages/Hero'
import {TitleHeroes} from '../src/componentes/Title/index'
import Heroes from "./pages/Heroes";



function App() {
  return (
    <Router>
      <TitleHeroes/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/heroes">
          <Heroes />
        </Route>
        <Route path="/hero">
          <Hero/>
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}
export default App;