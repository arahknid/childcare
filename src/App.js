import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/staff" className="nav-link">Staff</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/staff">
          <Staff />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="page">
      <h1>Services</h1>
      <p>This is the services page content.</p>
    </div>
  );
};

const Staff = () => {
  return (
    <div className="page">
      <h1>Staff</h1>
      <p>This is the staff page content.</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="page">
      <h1>About</h1>
      <p>This is the about page content.</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>This is the contact page content.</p>
    </div>
  );
};

export default App;