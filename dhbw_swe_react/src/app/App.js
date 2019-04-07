import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

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
import ProductDetail from './templates/ProductDetail/ProductDetail';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navigation />
      <div className="switch-wrapper">
        <Switch className="flex-item">
          <Route exact path="/home" component={Home} />
          <Route exact path="/" >
            <Redirect to="/home" />
          </Route>
          <Route exact path="/product" component={Products} />
          <Route exact path="/product/:productID" component={ProductDetail} />
          <Route exact path="/producer" component={Producers} />
          <Route exact path="/supplier" component={Suppliers} />
          <Route exact path="/customer" component={Customers} />
          <Route exact path="/deliverynote" component={Deliverynote} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/setting" component={Settings} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
