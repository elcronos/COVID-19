import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, InputLabel, FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';

function SignUp() {
  const [type, setType] = useState(10);
  let history = useHistory();

  const handleGoToLogin = () => {
    history.push('/login');
  };

  const handleSignUp = () => {
    history.push('/home');
  };



  return (
    <div className="ai-sign-up">
      <Card className="ai-sign-up__content">
        <Typography variant="h4">Sign Up</Typography>

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
          <TextField
            label="Confirm Password"
            placeholder=""
            type="password"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <FormControl margin="normal" variant="filled" fullWidth>
            <InputLabel id="sign-up-userType">User type</InputLabel>
            <Select
              labelId="sign-up-userType"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <MenuItem value={10}>Patient</MenuItem>
              <MenuItem value={20}>Health personnel</MenuItem>
            </Select>
          </FormControl>

          <div className="ai-sign-up__content-have-account">
            <Button onClick={handleGoToLogin}>Already have an account?</Button>
          </div>
          <div className="ai-sign-up__content-btn-sign-up">
            <Button className="ai-sign-up__btn-sign-up" variant="contained" color="primary" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;