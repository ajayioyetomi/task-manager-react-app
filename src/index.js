import React from 'react';
import ReactDOM from 'react-dom';
import './css/mini.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient,QueryClientProvider, } from '@tanstack/react-query';
// import {ReactQueryDevtools} from 'react-query/devtools'


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App/>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
