import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Product />
      </div>
    </Provider>
  );
}

export default App;
