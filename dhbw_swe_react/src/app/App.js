import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Navigation/>
          <Switch className='flex-item'>
            <Route path="/" component={Home} exact />
            <Route path="/products" component={Products} />
            <Route path="/producers" component={Producers} />
            <Route path="/suppliers" component={Suppliers} />
            <Route path="/customers" component={Customers} />
            <Route path="/deliverynote" component={Deliverynote} />
            <Route path="/search" component={Search} />
            <Route path="/settings" component={Settings} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
