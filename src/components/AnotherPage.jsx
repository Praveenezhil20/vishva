// AnotherPage.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function AnotherPage() {
  return (
    <Container maxWidth="md">
      <Box
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          This is another page
        </Typography>
        <Typography variant="body1">
          You have successfully navigated to another page.
        </Typography>
      </Box>
    </Container>
  );
}

export default AnotherPage;
