// == Base:
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// == Styles:
import './App.css'
// == Components:
import Profile from './components/Profile/Profile'
import Header from './components/Header'
import Home from './components/Articles/Home'
import Resume from './components/Articles/Resume'
import Portfolio from './components/Articles/Portfolio'
// == Images:
import republicImgJPG from './img/republic.jpg'
import republicImgWEBp from './img/republic.webp'
import chelseaImgJPG from './img/chelsea.jpg'
import chelseaImgWEBp from './img/chelsea.webp'

function chelseaIMG() {
  return (
    <picture>
      <source srcSet={chelseaImgWEBp} type="image/webp" />
      <img className="portfolio__img" src={chelseaImgJPG} alt="Изоб-ние проекта" />
    </picture>
  )
}

function republicIMG() {
  return (
    <picture>
      <source srcSet={republicImgWEBp} type="image/webp" />
      <img className="portfolio__img" src={republicImgJPG} alt="Изоб-ние проекта" />
    </picture>
  )
}

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
                {chelseaIMG()}
                {republicIMG()}
              </div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" render={() => <Portfolio
                  chelseaIMG={chelseaIMG} republicIMG={republicIMG}
                />} />
              </Switch>
            </main>
          </section>
        </div>
      </div>
    </Router>
  )
}

export default App
