import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './Styles/GlobalStyle.css'
import Layout from './Styles/Layout.css'
import Style from './Styles/Style.css'
import Menu from './Styles/Menu.css'
import Spinner from './Styles/Spinner.css'
import "typeface-montserrat"
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
