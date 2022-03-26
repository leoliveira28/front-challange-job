import React, { useEffect, useRef, useState, FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { Backdrop, CloseButton, Content, Header, HeaderText, StyledModal, Wrapper } from "./styles";

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
    headerText?: string;
    }
export const Modal: FunctionComponent<ModalProps> = ({
    isShown,
    hide,
    modalContent,
    headerText,
  }) => {
    const modal = (
      <React.Fragment>
        <Backdrop />
        <Wrapper>
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton onClick={hide}>X</CloseButton>
            </Header>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </React.Fragment>
    );
  
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
  };

