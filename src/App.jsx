import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';

// Components
import Profile from './components/Profile/Profile'
import Home from './components/Articles/Home'
import Resume from './components/Articles/Resume'
import Portfolio from './components/Articles/Portfolio'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <div className="container" id="tabs">
          <Profile />
          <section className="information">
            <Header />
            <main className="main">
              <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/resume" render={() => <Resume />} />
                <Route exact path="/portfolio" render={() => <Portfolio />} />
              </Switch>
            </main>
          </section>
        </div>
      </div>
    </Router>
  )
}

export default App
