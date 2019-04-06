import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './templates/Home/Home';
import Navigation from './organisms/Navigation/Navigation';
import Customers from './templates/Customers/Customers';
import Producers from './templates/Producers/Producers';
import Products from './templates/Products/Products';
import Search from './templates/Search/Search';
import Suppliers from './templates/Suppliers/Suppliers';
import Deliverynote from './templates/Deliverynote/Deliverynote';
import Settings from './templates/Settings/Settings';
import Error from './templates/Error/Error';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navigation />
      <div className="switch-wrapper">
        <Switch className="flex-item">
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/product" component={Products} />
          <Route path="/producer" component={Producers} />
          <Route path="/supplier" component={Suppliers} />
          <Route path="/customer" component={Customers} />
          <Route path="/deliverynote" component={Deliverynote} />
          <Route path="/search" component={Search} />
          <Route path="/setting" component={Settings} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
