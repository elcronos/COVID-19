import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Home from './pages/Home';
import SomePage from './pages/SomePage';

let theme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <NavLink to='/'>Home </NavLink> &nbsp;&nbsp;
        <NavLink to='/some-page'>Some page </NavLink>
        <hr />
        <Route exact path='/' render={() => <Home />} />
        <Route path='/some-page' render={() => <SomePage />} />
      </main>
    </ThemeProvider>
  );
}

export default App;