import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GetTicketProvider } from './contexts/GetTicketContext.jsx';
import { EventProvider } from './contexts/EventContext.jsx'
import { ToastProvider } from './contexts/ToastContext.jsx';
import { ModalProvider } from './contexts/ModalContext.jsx';
import { EventMetaProvider } from './contexts/EventMetaContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
// import { Auth0Provider } from "@auth0/auth0-react"
// import AuthHttpBridge from './auth/AuthHttpBridge.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <ToastProvider>
          <ModalProvider>
            <EventProvider>
              <EventMetaProvider>
                  <GetTicketProvider>
                      <App />
                  </GetTicketProvider>
              </EventMetaProvider>    
            </EventProvider>
          </ModalProvider>
        </ToastProvider>
      </AuthProvider>
  </StrictMode>,
)
