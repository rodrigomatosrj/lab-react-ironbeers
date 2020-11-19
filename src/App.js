import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import SingleBeer from './components/SingleBeer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/beers/:beerId" component={SingleBeer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
