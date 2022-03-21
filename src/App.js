import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Updates from './components/pages/Updates';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

//when you add a new import, don't forget to update Button.js

function App() {
  /* const redirectLink = (props) => {
    window.location.href = (props.to);
  }; */

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={ Home }/>
          <Route path='/resume' exact component={ Resume }/>
          <Route path='/projects' exact component={ Projects }/>
          <Route path='/contact' exact component={ Contact }/>
          <Route path='/updates' exact component={ Updates }/>
        </Switch>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
