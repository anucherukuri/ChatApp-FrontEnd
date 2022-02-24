import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ChatPage from "./components/ChatPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Chat/" component={NavBar} />
        <Route path="/" exact component={HomePage} />
        <Route path="/Chat/:Username" exact component={ChatPage} />
      </Router>
    </div>
  );
}

export default App;
