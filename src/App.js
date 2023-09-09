import React from 'react'
// import './App.css';

import Api from './Components/Api'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <React.Fragment>
      
      <Router>
        <Routes>
          
          
          <Route path="/Api" element={
            <React.Fragment>
              
              <Api/>
            </React.Fragment>
          }/>
          
        </Routes>
      </Router>
    </React.Fragment>
    
     
    
  );
}

export default App;
