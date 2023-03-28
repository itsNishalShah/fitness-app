import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <Box width="400px" sx={{xl:"1488px"}} m="0">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="exercise/:id" element={<ExerciseDetail/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App;
