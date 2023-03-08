import React,{useState} from 'react';
import Nav from './components/Nav';
import {Home,Dashboard,SignUp,Login} from './views';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import { ThemeProvider } from 'styled-components';
import { AppContextProvider } from './context';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


const theme = {
    lightBg: "#fff",
    darkBg:"rgb(40 44 52)",
    lightCr:"#222",
    darkCr:"#aaa"
}

export const queryClient = new QueryClient();

function App2() {

  return (
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
      
    );
}



export default App2;
