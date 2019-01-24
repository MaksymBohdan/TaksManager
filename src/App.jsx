import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/projectlayout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
