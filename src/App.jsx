// == Base:
import React, { useState, useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import PropagateLoader from 'react-spinners/PropagateLoader'
// == Styles:
import './App.css'
// == Components:
import Profile from './components/Profile/Profile'
import Header from './components/Main/Header'
import DrawImages from './components/DrawImages'
import Home from './components/Articles/Home'
import Resume from './components/Articles/Resume'
import Portfolio from './components/Articles/Portfolio'

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <HashRouter>
      {loading ? (
        <div className='loading'>
          <PropagateLoader color={'#fff'} loading={loading} size={15} />
        </div>
      ) : (
        <div className='wrapper'>
          <div className='container' id='tabs'>
            <Profile />
            <section className='information'>
              <Header />
              <main className='main'>
                <div
                  style={{
                    opacity: '0',
                    position: 'absolute',
                    top: '-5000px',
                  }}
                >
                  <DrawImages />
                </div>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/resume' component={Resume} />
                  <Route exact path='/portfolio' component={Portfolio} />
                </Switch>
              </main>
            </section>
          </div>
        </div>
      )}
    </HashRouter>
  )
}

export default App
