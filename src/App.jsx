import React, { useEffect } from 'react';
import { Table } from '@mantine/core';
import useDataAnalytics from './hooks/useDataAnalytics';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flavanoids from './pages/Flavanoids';
import Gamma from './pages/Gamma';

function App() {
 
  return (
    <Router>
      <div className='w-full h-full'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Flavanoids />} />
          <Route path='/gamma' element={<Gamma />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
