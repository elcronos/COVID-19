import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, TextField, Typography } from '@material-ui/core';

function ForgotPassword() {
  let history = useHistory();

  const handleSendEmail = () => {
    history.push('/login');
  };

  return (
    <div className="ai-forgot-password">
      <Card className="ai-forgot-password__content">
        <Typography variant="h4">Forgot Password</Typography>

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
          <div className="ai-forgot-password__content-btn-send-email">
            <Button className="ai-forgot-password__btn-send-email" variant="contained" color="primary" onClick={handleSendEmail}>
              Send Email
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default ForgotPassword;