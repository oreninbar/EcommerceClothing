import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import  AdminStore  from "./stores/adminStore";
import  CustomerStore  from "./stores/customerStore";
import App from "./App";

let admin_store = new AdminStore();
let customer_store = new CustomerStore();

let stores = { admin_store, customer_store };

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
