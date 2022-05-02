// == Base:
import React from 'react'
import ReactDOM from 'react-dom'
// == Component:
import Wrapper from './components/Wrapper'
import App from './App'

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('root')
)