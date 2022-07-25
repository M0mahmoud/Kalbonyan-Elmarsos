import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";
// 1
// import ProductsProvider from './context/products-context'
// 2
import configureStore from "./hooks-store/products-store";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });
// const store = createStore(rootReducer);

configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);
