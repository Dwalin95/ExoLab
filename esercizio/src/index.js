

//questa classe renderizza le funzioni per farle vedere nei siti web
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importo bootstrap
import 'bootstrap/dist/css/bootstrap.css';
                                  //trova nella pagina html il contenitore root (presente nella pagina html)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //contenitore e verifica che i componenti da lui inclusi abbiano problemi 
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
