import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import UploadPicture from './pages/upload-photo/UploadPicture';
import PreviewPicture from './pages/upload-photo/PreviewPicture';

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
        <Route exact path='/home' render={() => <Home />} />
        <Route exact path='/signUp' render={() => <SignUp />} />
        <Route exact path='/' render={() => <Login />} />
        <Route exact path='/forgot' render={() => <ForgotPassword />} />


        <Route exact path='/upload' render={() => <UploadPicture />} />
        <Route exact path='/upload/preview' render={() => <PreviewPicture />} />
        {/* <Redirect
          to={{
            pathname: '/login',
          }}
        /> */}
      </main>
    </ThemeProvider>
  );
}

export default App;