import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="f5e56e1cfd9748d7ad06f23cd35b5573"
      domain="https://methodical.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173">
      
      <TodosContextProvider>
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
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>,
)
