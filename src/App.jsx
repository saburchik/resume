// == Base:
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// == Styles:
import './App.css'
// == Components:
import Profile from './components/Profile/Profile'
import Header from './components/Main/Header'
import DrawImages from './components/DrawImages'
import Home from './components/Articles/Home'
import Summary from './components/Articles/Summary'
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
              <div style={{ display: "none" }}>
                <DrawImages />
              </div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/summary" component={Summary} />
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
