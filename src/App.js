
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';
import './App.css'
// import AnotherPage from './components/AnotherPage'; // Import your target page component
import Signup from './components/signup'; 
import Dashboard from './Pages/Dashboard';
import Learning from './Pages/Learning';
import Projects from './Pages/Projects';
import Tasks from './Pages/Tasks';
import Attendance from './Pages/Attendance';
import People from './Pages/People';
import ManageLeave from './Pages/ManageLeave';
import Settings from './Pages/Settings';
import Sidebar from './SideBar/Sidebar';
import Notification from './Pages/Notification';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/signup" element={< Signup/>} /> 
        <Route element={<Sidebar/>}>
        <Route path="/deshboard" element={<Dashboard/>}/>
          
          <Route path="/learning" element={<Learning />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks/>} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/mange leave" element={<ManageLeave />} />
          <Route path="/people" element={<People />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/rectangle" element={<Settings />} />
          </Route>{/* Define your route */}
      </Routes>
    </Router>
    
  );
}

export default App;
