import React from 'react'

import './index.css'
import './img/logo.png'

export default () => {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
      <a href="/"><img className="logo" src="img/logo.png"/></a>
      <h2 className="label">Agenda de Gentilezas</h2>
    </div>
  )
}
