import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

// Components
import Profile from './components/Profile/Profile'
import Header from './components/Header'
import Home from './components/Articles/Home'
import Resume from './components/Articles/Resume'
import Portfolio from './components/Articles/Portfolio'

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
                <Route exact path="/" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
              </Switch>
            </main>
          </section>
        </div>
      </div>
    </Router>
  )
}

export default App
