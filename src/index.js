import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify, { Storage } from "aws-amplify";
import awsExports from "./aws-exports";
import awsconfig from "./aws-exports";
Amplify.configure(awsExports);
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
