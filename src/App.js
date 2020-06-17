import React from 'react';
import './App.css';
import StudentDetails from './studentDetails';
import Marksheet from './marksheet';

function App() {
  return(
    <div className="App">
      <StudentDetails Name="Hasan Dawood" FName="Syed Hasan Adil" Course="BootCamp 2020" Age="21"/>
    
      <Marksheet Eng="60%" Urdu="80%" Math="50%" Chem="75%" Physics="66%"/>
    </div>
  );
}
export default App;