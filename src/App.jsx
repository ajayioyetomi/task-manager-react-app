import React,{useState} from 'react';
import Nav from './components/Nav';
import {Home,Dashboard,SignUp,Login} from './views';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import { ThemeProvider } from 'styled-components';
import { AppContextProvider } from './context';

const theme = {
    lightBg: "#fff",
    darkBg:"rgb(40 44 52)",
    lightCr:"#222",
    darkCr:"#aaa"
}



function App2() {

  return (
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Nav/>
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="/dashboard/*" element={<Dashboard/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AppContextProvider>
      
      
    );
}



export default App2;
