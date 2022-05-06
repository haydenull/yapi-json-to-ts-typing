import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'


renderApp('browser')

function renderApp(env: string) {
  ReactDOM.render(
    <React.StrictMode>
      <App env={env} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
