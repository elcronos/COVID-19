import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import SomePage from './pages/SomePage';

function App() {
  return(
    <main>
      <NavLink to='/'>Home </NavLink> &nbsp;&nbsp;
      <NavLink to='/some-page'>Some page </NavLink>
      <hr/>
      <Route exact path='/' render={() => <Home />} />
      <Route path='/some-page' render={() => <SomePage />} />
    </main>
  );
}

export default App;