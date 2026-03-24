import { useContext, useCallback } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const useModal = () => {

  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error ("useModal must be used within ModalContext")
  };

  //the state seemes to be imported as is and doesn't change on calling setDisplay, making these the case for closeModal
  //initially display === false
  //(!display) is true
  //display === false is alse true
  //so it throws the error meant for if the modal is open i.e true

  const { setDisplay, setModal } = ctx;

  const showModal = useCallback((payload = "") => {
    setDisplay(prev => {
      if (prev === true) {
        throw new Error ("Modal is currently displayed")
      }
      return true;
    })

    setModal(payload)
  }, []);


  const changeModal = useCallback((payload = "") => {
    setModal(payload)
  }, []);


  const closeModal = useCallback(() => {
    //check that modal isn't currently closed
    setDisplay(prev => {
      if (prev === false) {
        throw new Error ("Modal is already closed")
      }
      return false;
    })
    setModal(null)
  }, []);

  return {showModal, changeModal, closeModal}
}