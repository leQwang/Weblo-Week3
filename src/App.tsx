import React, { useRef, useEffect, useState } from 'react';
import './index.css';
import Frame1 from './components/Frame1';
import NavBar from './components/NavBar';
import Frame2 from './components/Frame2';

function App() {

  return (
    <div className='flex flex-col overflow-hidden'>
      <NavBar/>
      <Frame1/>
      <Frame2/>
    </div>
  );
}

export default App;