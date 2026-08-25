import {StrictMode } from 'react'
import {createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "./context/ThemeContext.jsx";





ReactDOM.createRoot(document.getElementById("root")).render(

<ThemeProvider>
  <RouterProvider router={router} />
  
</ThemeProvider>
)
{/* <StrictMode>
  <RouterProvider router={router} />
</StrictMode> */}
