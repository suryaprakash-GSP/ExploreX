import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import { StateContextProvider } from './contexts/StateContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
    <Router>
      <App />
    </Router>
    </StateContextProvider>
  </React.StrictMode>,
)
