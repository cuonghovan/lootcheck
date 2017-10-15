import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Header from './components/header';
import ClickCount from './pages/click-count';
import Wheather from './pages/wheather';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={ClickCount} />
        <Route exact path='/click-count' component={ClickCount} />
        <Route exact path='/wheather' component={Wheather} />
      </Switch>
    </main>
  </div>
);

export default App;
