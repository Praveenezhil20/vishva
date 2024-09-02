import React from 'react';
import styled from 'styled-components'; 
import photo from '../SecondPic/Celebration.png';
import { Typography } from '@mui/material';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 175px; /* Adjust as needed */
  margin-left: 180px; 
`;
const CelebrationImage = styled.img`
display: flex;
align-items: center;
justify-content: center;  
// position: relative;
 /* Adjust as needed */
`;
const CustomTypography = styled(Typography)`
  font-weight: 700;
  font-size: 16px;
`;
const CustomTypography1 = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
`;


const Dashboard = () => {
  return (
    <Container>
      <div>
        <CelebrationImage src={photo} alt="Celebration" />
        <CustomTypography ><b>Your Account is created successfully</b></CustomTypography><br/>
        <CustomTypography1>Please wait for approval</CustomTypography1>
      </div>
    </Container>
  );
};

export default Dashboard;
