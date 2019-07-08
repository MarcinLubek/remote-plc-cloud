import React from 'react'
import ReactDOM from 'react-dom'
import './Styles/GlobalStyle.css'
import './Styles/Layout.css'
import './Styles/Style.css'
import './Styles/Menu.css'
import './Styles/Spinner.css'
import "typeface-montserrat"
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
