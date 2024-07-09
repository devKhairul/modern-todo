import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <App />
    
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      theme="dark" />


  </React.StrictMode>,
)
