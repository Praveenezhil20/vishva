import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Link, Box, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Welcomeimage from './Welcomeimage.png';
import Logo from './Logo.png';
import NewLogo from './NewLogo.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {LoginSocialGoogle} from 'reactjs-social-login'

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

  const handleLoginClick = (event) => {
    event.preventDefault();
    if (validateForm()) {
      navigate('/deshboard');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (

    <Container height='100%' maxWidth="md" sx={{ marginTop: {md: "90px"}, display: 'flex',flexDirection:"column", alignItems: "center",justifyContent:"center" }}>
      <Box
        width="100%"
        p={{ xs: 2, sm: 3, md: 4 }}
        borderRadius={2}
        boxShadow={{ xs: 1, sm: 2, md: 3 }}
        bgcolor="#fff"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent='center'
        height='100%'
      >
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            container
            alignItems="center"
            justifyContent="center"
          >
            <Box width="100%" textAlign="center">
              <div>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ maxWidth: '120px', height: 'auto', display: 'block', margin: '0 auto' }}
                />
                <br />
              </div>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Welcome Back!
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#5B738B' }}
                gutterBottom
              >
                Login to your account
              </Typography>

              <Box textAlign="left" mt={2}>
                <Typography variant="body1" color="#5B738B">Email ID</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your Email ID"
                  fullWidth
                  margin="none" // Changed from "0" to "none"
                  sx={{
                    backgroundColor: '#F1ECFF',
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={Boolean(emailError)}
                  helperText={emailError}
                />
                <br />
                <br />
                <Typography variant="body1" color="#5B738B">Password</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter your Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  margin="none"
                  sx={{
                    backgroundColor: '#F1ECFF',
                  }}
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
                    )
                  }}
                />

              </Box>
              <Box display="flex" justifyContent="center" mb={2} mt={2} >
                <Link href="#" variant="body2" color="#5B738B" style={{ marginRight: '10px', textDecoration: 'none' }}>
                  Forgot Password?
                </Link>
                <Link href="#" variant="body2" color="#A668F4" fontWeight={'400'} style={{ textDecoration: 'none' }}>
                  Reset Password
                </Link>
              </Box>
              <Button
                variant="contained"
                style={{
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
                style={{ margin: '20px 0' }}
              >
                <hr style={{ flex: 1, border: '0', borderTop: '1px solid #000', marginRight: '8px' }} />
                <Typography variant="body2" style={{ whiteSpace: 'nowrap' }}>
                  or
                </Typography>
                <hr style={{ flex: 1, border: '0', borderTop: '1px solid #000', marginLeft: '8px' }} />
              </Box>
              <LoginSocialGoogle
                  client_id='208154501561-6202i49b0pmhn22c6fkvqqr7eepdson0.apps.googleusercontent.com'
                  access_type='offline'
                  
                  onResolve={(provider,data) => {


                  }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<img src={NewLogo} alt="New Logo" style={{width:20,height:20}} />}
                      fullWidth
                      style={{
                        marginBottom:'20px',
                        textTransform:'none',
                        borderColor:'#000000',
                        color:'#000000',
                        backgroundColor:'transparent',
                        fontWeight:'800'
                      }}
                    >
                    Login with Google
                    </Button>
                  </LoginSocialGoogle>
              

              
                
                
              

              <Typography variant="body2" align="center" sx={{ color: '#5B738B' }}>
                Don’t have an account? {' '}
                <Link href="#" color="#A668F4" onClick={handleSignUpClick} style={{ textDecoration: 'none' }}>
                  Sign up for Free
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: '#F1ECFF',
                border: '1px solid #ccc',
                height: '600px',
                borderRadius: '8px',
                padding: '8px',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <img
                src={Welcomeimage}
                alt="Illustration"
                style={{
                  maxWidth: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Welcomepage;
