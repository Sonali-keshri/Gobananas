import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Box className='container'>
        <Navbar />
        <div id="detail">
          <Outlet />
        </div>
      </Box>
    </>
  );
}

export default App;
