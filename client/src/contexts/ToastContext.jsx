import {createContext, useContext, useState, useCallback} from "react";
import ToastContainer from "../components/toast-notification-components/ToastContainer";

const ToastContext = createContext();

export function ToastProvider({children}){
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "info") => {
    const id = crypto.randomUUID();

    setToasts(prev => [...prev, {id, message, type}]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }, []);

  return(
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
};

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error ("useToast must be used inside ToastProvider");
  return ctx;
}