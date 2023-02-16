import React from 'react';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Contactme from './components/Contactme/Contactme';
import Education from './components/Education/Education';
import Resume from './components/Resume/Resume';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div>
      <Aboutme />
      <Education />
      <Experience />
      <Resume />
      <Contactme />
    </div>
  );
}

export default App;
