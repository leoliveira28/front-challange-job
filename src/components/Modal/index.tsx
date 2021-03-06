
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { GrClose } from 'react-icons/Gr'
import { StyledModal, StyledModalBody, StyledModalHeader, StyledModalOverlay, StyledModalTitle } from "./styles";
import { ModalForm } from "../ModalForm";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
}

const Modal = ({ show, onClose, title }: ModalProps) => {
  
  
  const [isBrowser, setIsBrowser] = useState(false);
 
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleCloseClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onClose();  
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <button onClick={handleCloseClick}>
          <GrClose />
          </button>
        </StyledModalHeader>
        <StyledModalTitle>{title}</StyledModalTitle>
        <StyledModalBody>{       
         <ModalForm />
      
        }</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};



export default Modal;