import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton,
} from "./styles";

interface DropdownProps {
     action?: string | undefined;
     formLabel: boolean | React.ReactChild;
     children?: boolean | string;
     buttonText: string | number ; 
}

interface OptionProps {
    selected?: boolean | undefined | string;
    value: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;

}

export function Dropdown(props) {
    
   return (
    <DropdownWrapper action={props.action}>
      <StyledLabel htmlFor="services">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      <StyledLabel htmlFor="Nome do-empreendimento">Lançamento</StyledLabel>
      <input type="text" name='Nome do empreendimento' placeholder="Nome do empreendimento" />
      
    </DropdownWrapper>
  );
}

export function Option(props){
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}

export function Button(props) {
  return (
    <StyledButton type="submit" value={props.buttonText} />
  )
}