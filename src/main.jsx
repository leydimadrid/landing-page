import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './i18n/en.json'
import es from './i18n/es.json'

i18next.use(initReactI18next)
.init({
  lng: 'en',
  interpolation: {
    escapeValue:false
  }, 
  resources:{
    en: {
      translation: en,
    },
    es: {
      translation: es
    }

  }
})


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
