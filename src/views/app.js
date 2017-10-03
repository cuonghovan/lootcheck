import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Login from './pages/login';
import UserInfo from './pages/user-info';
import Header from './components/app-header';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/user-info' component={UserInfo} />
      </Switch>
    </main>
  </div>
);

export default App;