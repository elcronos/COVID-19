import React from 'react';
import { Button, Card, TextField, Typography } from '@material-ui/core';

function Login() {
  return (
    <div className="ai-login">
      <Card className="ai-login__content">
        <Typography variant="h4">Login</Typography>

        <form noValidate autoComplete="off">
          <TextField
            id="filled-full-width"
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
            id="filled-full-width"
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
            <Button>Forgot your password?</Button>
          </div>
          <div className="ai-login__content-btn-login">
            <Button className="ai-login__btn-login" variant="contained" color="primary">
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;