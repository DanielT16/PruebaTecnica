import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DashboardMonterrey } from './screens/DashboardMonterrey';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <style>
      {`
        html, body, #root {
          height: 100%;
          margin: 0;
        }
      `}
    </style>
    <div className='w-full h-full m-0 p-0'>
      {/* <React.StrictMode> */}
        <DashboardMonterrey />
      {/* </React.StrictMode> */}
    </div>
  </>
);

reportWebVitals();
