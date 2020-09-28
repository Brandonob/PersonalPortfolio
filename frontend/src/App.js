import React from 'react';
import logo from './logo.svg';
import Home from './features/HomePage/Home'
import { Route } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";
// import { Counter } from './features/counter/Counter';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"}>
          <Home />
      </Route>
    </div>
  );
}

export default App;
