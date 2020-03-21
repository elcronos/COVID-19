import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, TextField, Typography, Box } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

function Login() {
  let history = useHistory();

  const handleGoToSignUp = () => {
    history.push('/signup');
  };

  const handleGoToForgot = () => {
    history.push('/forgot');
  };

  const handleLogin = () => {
    history.push('/home');
  };

  return (
    <div className="ai-login">
      <Card className="ai-login__content">
        <Typography variant="h4">
          <FormattedMessage id="login.title"></FormattedMessage>
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label={<FormattedMessage id="app.email"></FormattedMessage>}
            fullWidth
            type="email"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            label={<FormattedMessage id="app.password"></FormattedMessage>}
            placeholder=""
            type="password"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <div className="ai-login__content-forgot">
            <Button onClick={handleGoToForgot}><FormattedMessage id="login.forgotPassword"></FormattedMessage></Button>
          </div>
          <div className="ai-login__content-btn-login">
            <Button className="ai-login__btn-login" variant="contained" color="primary" onClick={handleLogin}>
              <FormattedMessage id="login.title"></FormattedMessage>
            </Button>
          </div>
        </form>

        <Box mt="2" mb="2" display="flex" justifyContent="center">
          <Button onClick={handleGoToSignUp}><FormattedMessage id="login.goToSignUp"></FormattedMessage></Button>
        </Box>
      </Card>
    </div>
  );
}

export default Login;