import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  /*const redirectLink = (props) => {
    window.location.href = (props.to);
  };*/

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/resume' exact component={ Resume }/>
          <Route path='/projects' exact component={ Projects }/>
          <Route path='/contact' exact component={ Contact }/>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
