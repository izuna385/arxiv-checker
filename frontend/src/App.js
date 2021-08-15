import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Papers from './pages/Papers'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Papers} />
    </div>
  </BrowserRouter>

)

export default App;
