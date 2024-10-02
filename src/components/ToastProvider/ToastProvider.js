import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey({callback: setToasts})

  return (
    <ToastContext.Provider
        value={{
          toasts,
          setToasts
        }}
      >
      {
        children
      }
      </ToastContext.Provider>
  )
}

export default ToastProvider;
