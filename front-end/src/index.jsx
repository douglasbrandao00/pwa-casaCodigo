import React from 'react'
import ReactDOM from 'react-dom'

import './img/favicon.ico'
import './css/index.css'

import App from './components/app.jsx'
import Header from './components/Header/index.jsx'

ReactDOM.render(
  <Header />,
  document.querySelector("#main")
)
