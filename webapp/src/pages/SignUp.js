import React, { useState } from 'react';
import { Button, Card, InputLabel, FormControl, MenuItem, Select, TextField, Typography } from '@material-ui/core';

function SignUp() {
  const [type, setType] = useState(null);


  return (
    <div className="ai-sign-up">
      <Card className="ai-sign-up__content">
        <Typography variant="h4">Sign Up</Typography>

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
          <TextField
            id="filled-full-width"
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
            <InputLabel id="demo-simple-select-filled-label" fullWidth>User type</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <MenuItem value={10}>Patient</MenuItem>
              <MenuItem value={20}>Health personnel</MenuItem>
            </Select>
          </FormControl>

          <div className="ai-sign-up__content-have-account">
            <Button>Already have an account?</Button>
          </div>
          <div className="ai-sign-up__content-btn-sign-up">
            <Button className="ai-sign-up__btn-sign-up" variant="contained" color="primary">
              Sign Up
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;