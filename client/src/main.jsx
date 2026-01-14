import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { EventDataProvider } from './contexts/EventDataContext.jsx'
import { EventChronologicalProvider } from './contexts/EventChronologicalContext.jsx';
import { GetTicketProvider } from './contexts/GetTicketContext.jsx';
import { EventProvider } from './contexts/EventContext.jsx'
import { ToastProvider } from './contexts/ToastContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <EventProvider>
        <EventDataProvider>
          <EventChronologicalProvider>
            <GetTicketProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </GetTicketProvider>
          </EventChronologicalProvider>
        </EventDataProvider>
      </EventProvider>
    </ToastProvider>
  </StrictMode>,
)
