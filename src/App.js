import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form_components from "./components/Form_components";
import Result from "./components/Result";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="container-fluld header-box">
          <div className="container">
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Form_components />
            <Result />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
