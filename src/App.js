import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav>
        </Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
