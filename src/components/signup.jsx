// SignUpPage.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function SignUpPage() {
  return (
    <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
      <Box
        p={4}
        borderRadius={2}
        boxShadow={3}
        bgcolor="#fff"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter your Email ID"
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          placeholder="Create a Password"
          type="password"
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default SignUpPage;
