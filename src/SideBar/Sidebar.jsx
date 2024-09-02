import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from '@mui/material';
import Nav1 from '../SecondPic/nav1.png'; 
import Nav2 from '../SecondPic/nav2.png';
import ListItemText from '@mui/material/ListItemText';
import Dashboard from '../SecondPic/dashboard.png';
import Learning from '../SecondPic/learning.png';
import Projects from '../SecondPic/project.png';
import Setting from '../SecondPic/settings.png';
import Leave from '../SecondPic/leave.png';
import People from '../SecondPic/people.png';
import Attendance from '../SecondPic/attendance.png';
import Task from '../SecondPic/tasks.png';
import TaskPro from '../SecondPic/taskpro.png';
import { createTheme, ThemeProvider,Container,Box,Grid } from '@mui/material';
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Sidebar = () => {
  return (
    
     <ThemeProvider theme={theme}>
      <Container >
          <Grid>
          <Drawer variant="permanent" > 
          <ListItem  >
          <img src={TaskPro} alt='' />
        </ListItem>  
        <br/> 
      <List sx={{padding:'15px'}}>
        <ListItem button component={Link} to="/dashboard" >
          <ListItemIcon>
          <img src={Dashboard} alt=''/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/learning">
          <ListItemIcon>
          <img src={Learning} alt='' />
          </ListItemIcon>
          <ListItemText primary="Learning"  />
        </ListItem>       
        <ListItem button component={Link} to="/projects">
          <ListItemIcon>
          <img src={Projects} alt='' />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon>
            <img src={Task} alt='' />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button component={Link} to="/attendance">
          <ListItemIcon>
          <img src={Attendance} alt='' />
          </ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItem>
        <ListItem button component={Link} to="/manageleave">
          <ListItemIcon>
            <img src={Leave} alt='' />
          </ListItemIcon>
          <ListItemText primary="Manage Leave" />
        </ListItem>
        <ListItem button component={Link} to="/people">
          <ListItemIcon>
          <img src={People} alt='' />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
          <img src={Setting} alt='' />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider variant="middle" flexItem />
    </Drawer> 
    </Grid>
    
    <Grid  >
      <Box >
    <AppBar sx={{ width:'5000px',height:'61px'}}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton edge="end" color="inherit" component={Link} to="/notification">
          <img src={Nav1} alt="Notification" />
        </IconButton>
        <IconButton edge="end" color="inherit" component={Link} to="/rectangle">
          <img src={Nav2} alt="Settings" />
        </IconButton>
      </Toolbar>
    </AppBar>
    </Box>
    </Grid>
    </Container>
    </ThemeProvider>
 
  );
};

export default Sidebar;
