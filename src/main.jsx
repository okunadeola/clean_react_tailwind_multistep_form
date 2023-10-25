import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SubscriptionContext from './context/SubscriptionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SubscriptionContext>
      <App />
    </SubscriptionContext>
  </React.StrictMode>,
)
