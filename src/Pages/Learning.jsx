import React from 'react'
import styled from 'styled-components'; 
import Trash from '../SecondPic/box.png';
import { Typography } from '@mui/material';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 248px; /* Adjust as needed */
  margin-left: 180px; 
`;
const CelebrationImage = styled.img`
display: flex;
align-items: center;
justify-content: center;  
`;
const CustomTypography = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
`;
const CustomTypography1 = styled(Typography)`
  font-weight: 700;
  font-size: 18px;
  margin-top:40px;
  margin-left:13px;
`;

const Learning = () => {
  return (
    <Container>
    <div>
      
      <CelebrationImage src={Trash} alt="trash" /><br/>
      <CustomTypography ><b>No Courses found !</b></CustomTypography><br/>
    </div>
  </Container>
  )
}

export default Learning
