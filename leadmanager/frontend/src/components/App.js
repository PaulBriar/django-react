import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '../store'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
      <Dashboard />
      </div>
    </Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
