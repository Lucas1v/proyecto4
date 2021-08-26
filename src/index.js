import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calcu from "./components/Calcu";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Calcu />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
