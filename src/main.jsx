import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {  HelmetProvider } from 'react-helmet-async';
import { persistor, store } from "./redux/store";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </HelmetProvider>
  </React.StrictMode>
);