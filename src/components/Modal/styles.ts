import styled from 'styled-components';

export const StyledModalTitle = styled.h2`
  margin: 10px;
`;
export const StyledModalBody = styled.div`
  padding-top: 5px;

  form {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 5px;
  justify-content: center;
  
  select {
  max-width: 100%;
  height: 50px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
 
  }
  label {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove #BBB8D9;
        margin-top: 10px;
        height: 50px;
  }

  button {
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
    margin-top: 10px;
  }
  .cep {
    display: flex;
    align-items: center;

    input {
      width: 50%;
      margin: 10px;
    }
    button {
      width: 50px;
      height: 50px;
      justify-content: center;
      align-self: baseline;
    }
    p {
      padding: 10px;

    }
  }
  }
  
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;

  button {
    border: 0;
    padding: 1px;
    margin: 10px;
    background: #fff;
    height: 10px;
  }
`;

export const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 650px;
  border-radius: 15px;
  padding: 15px;
`;
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;