
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './app/store.js'

import './assets/css/bootstrap.min.css'
import './assets/css/tiny-slider.css'
import './assets/css/style.css'

import './assets/js/bootstrap.bundle.min'
import './assets/js/custom.js'





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
)
