import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotAuthorized = () => {
  const router = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
        <Typography 
          variant="h5" 
           
          sx={{ 
            mb: 4, 
            fontWeight: 'extrabold', 
            fontSize: { xs: '2rem', lg: '3rem' }, 
            color: 'primary.main' 
          }}
        >
          Not Authorized
        </Typography>
        <Typography 
          variant="h3" 
          component="p" 
          sx={{ 
            mb: 4, 
            fontWeight: 'bold' 
          }}
        >
          Something's missing.
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4, 
            color: 'text.secondary' 
          }}
        >
          You are not authorized to view this page.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="/" 
          sx={{ 
            textTransform: 'none', 
            my: 4 
          }}
          onClick={()=>router("/")}
        >
          Back to Homepage
        </Button>
      </Container>
    </Box>
  );
}

export default NotAuthorized;
