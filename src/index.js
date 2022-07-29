import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import gV from "./gV";

import { db } from "./firebase";

import { Timestamp} from 'firebase/firestore';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>
);


