import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Link, Box, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Welcomeimage from '../components/Welcomeimage.png';
import Logo from '../components/Logo.png'; 
import NewLogo from '../components/NewLogo.png'; 
import Visibility from '@mui/icons-material/Visibility'; 
import VisibilityOff from '@mui/icons-material/VisibilityOff'; 

function Welcomepage() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const [emailError, setEmailError] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 
  const navigate = useNavigate(); 

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault(); 
  };

  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLoginClick = () => {
    if (validateForm()) {
      navigate('/another'); 
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to sign-up page
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: { xs: '20px', sm: '30px', md: '50px' } }}>
      <Box
        width="100%"
        p={{ xs: 2, sm: 3, md: 4 }} // Responsive padding
        borderRadius={2} // Rounded corners
        boxShadow={{ xs: 1, sm: 2, md: 3 }} // Responsive box shadow
        bgcolor="#fff" // Background color
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center" justifyContent="center">
          
          {/* Content section */}
          <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
            <Box width="100%" textAlign="center">
              <div>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ maxWidth: '120px', height: 'auto', display: 'block', margin: '0 auto' }}
                />
                <br />
              </div>
              <Typography variant="h4" gutterBottom>
                Welcome Back!
                <Typography variant="subtitle1" sx={{ color: '#5B738B' }} gutterBottom>
                  Login to your account
                </Typography>
              </Typography>
              <Box textAlign="left" mt={2}>
                <Typography variant="body1" color="#5B738B">Email ID</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your Email ID"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={Boolean(emailError)}
                  helperText={emailError}
                />
                <Typography variant="body1" color="#5B738B" mt={2}>Password</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box display="flex" justifyContent="center" mb={2} mt={2}>
                <Link href="#" variant="body2" color="#5B738B" sx={{ marginRight: '10px' }}>
                  Forgot Password?
                </Link>
                <Link href="#" variant="body2" color="#A668F4" fontWeight={'400'}>
                  Reset Password
                </Link>
              </Box>
              
              <Button
                variant="contained"
                sx={{ 
                  marginTop: '20px', 
                  fontSize: '16px', 
                  textTransform: 'capitalize',
                  backgroundColor: '#A668F4',
                  color: '#ffffff'
                }}
                fullWidth
                onClick={handleLoginClick}
                disabled={!email || !password || Boolean(emailError) || Boolean(passwordError)}
              >
                Login
              </Button>

              <Box 
                display="flex" 
                alignItems="center" 
                justifyContent="center" 
                sx={{ margin: '20px 0' }}
              >
                <hr style={{ flex: 1, border: '0', borderTop: '1px solid #000', marginRight: '8px' }} />
                <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                  or
                </Typography>
                <hr style={{ flex: 1, border: '0', borderTop: '1px solid #000', marginLeft: '8px' }} />
              </Box>
              
              <Button
                variant="outlined"
                startIcon={<img src={NewLogo} alt="New Logo" style={{ width: 20, height: 20 }} />}
                fullWidth
                sx={{ 
                  marginBottom: '20px',
                  textTransform: 'capitalize',
                  borderColor: '#000000',
                  color: '#000000',
                  backgroundColor: 'transparent'
                }}
              >
                Login with Google
              </Button>

              <Typography variant="body2" align="center" sx={{ color: '#5B738B' }}>
                Don’t have an account? {' '}
                <Link href="#" color="#A668F4" onClick={handleSignUpClick}>
                  Sign up for Free
                </Link>
              </Typography>
            </Box>
          </Grid>
          
          {/* Welcome image section */}
          <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <img
                src={Welcomeimage}
                alt="Illustration"
                style={{ maxWidth: '90%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px', marginLeft: '20px' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Welcomepage;
