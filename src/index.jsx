// == Base:
import React from 'react'
import ReactDOM from 'react-dom'
// == Component:
import LangProvider from './components/LangProvider'
import App from './App'

ReactDOM.render(
  <LangProvider>
    <App />
  </LangProvider>,
  document.getElementById('root')
)
