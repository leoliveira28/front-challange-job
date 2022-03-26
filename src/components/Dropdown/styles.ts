import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;
  
export const StyledSelect = styled.select`
  max-width: 100%;
  height: 50px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const StyledButton = styled.input`
  background: #4F46BB;
    color: #fff;
    border: 0;
    border-radius: 71px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    width: 150px;
    cursor: pointer;
`;

