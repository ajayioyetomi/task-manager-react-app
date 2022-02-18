import React from 'react';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './Css/index.css';

function App2() {
  return (
      <React.Fragment>
        <Nav/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/dashboard/*" element={<Dashboard/>}></Route>

           
          </Routes>
        </BrowserRouter>
       
      </React.Fragment>
    );
}



export default App2;
