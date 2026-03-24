import { createContext, useState } from "react";
import ModalsContainer from "../components/add-event-flow-components/ModalsContainer";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
  const [display, setDisplay] = useState(false);
  const [modal, setModal] = useState(null);

  return(
    <ModalContext.Provider value={{display, setDisplay, setModal}}>
      {children}
      <ModalsContainer display={display} modal={modal}/>
    </ModalContext.Provider>
  )
}