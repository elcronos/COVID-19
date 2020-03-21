import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, TextField, Typography, Box } from '@material-ui/core';

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
        <Typography variant="h4">Login</Typography>

        <form noValidate autoComplete="off">
          <TextField
            label="Email"
            fullWidth
            type="email"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            label="Password"
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
            <Button onClick={handleGoToForgot}>Forgot your password?</Button>
          </div>
          <div className="ai-login__content-btn-login">
            <Button className="ai-login__btn-login" variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </form>

        <Box mt="2" mb="2" display="flex" justifyContent="center">
          <Button onClick={handleGoToSignUp}>You do not have account, create one!</Button>
        </Box>
      </Card>
    </div>
  );
}

export default Login;