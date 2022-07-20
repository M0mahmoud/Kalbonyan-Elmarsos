import React from "react";
import ReactDOM from "react-dom/client";

//Redux
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import store from './components/store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);