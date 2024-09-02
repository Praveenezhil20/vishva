import React from 'react';
import styled from 'styled-components'; // Import styled-components
import { AppBar, Toolbar, IconButton } from '@mui/material';
import Nav1 from '../SecondPic/nav1.png'; // Make sure to import the correct image file
import Nav2 from '../SecondPic/nav2.png'; // Make sure to import the correct image file
import { Link } from 'react-router-dom';

// Define your styled component
const StyledNavbar = styled(AppBar)`
  background-color: dark; /* Set your desired background color */
`;

const Navbar = () => {
  return (
    <StyledNavbar position="static">
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton edge="end" color="inherit" component={Link} to="/notification">
          <img src={Nav1} alt="Notification" />
        </IconButton>
        <IconButton edge="end" color="inherit" component={Link} to="/rectangle">
          <img src={Nav2} alt="Settings" />
        </IconButton>
      </Toolbar>
    </StyledNavbar>
  );
};

export default Navbar;
