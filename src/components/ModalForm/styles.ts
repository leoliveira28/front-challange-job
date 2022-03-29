import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 5px;
  justify-content: center;
  
  button {
    border: 0;
    color: #fff;
    padding: 10px 40px;
    width: 314px;
    height: 36px;
    background: #4F46BB;
    border-radius: 71px;
    align-self: center;
    margin-top: 35px;
    margin-bottom: 35px;

    
  }
`;

export const InputLabel = styled.label`
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    @media (max-width: 768px) {
      margin-bottom: 4px;
      margin-top: 4px;
    }
  `;

export const Content = styled.select`
  max-width: 100%;
  height: 50px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
     height: 35px;
     padding: 4px; 
    }
`;

export const InputForm = styled.input`
     border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove #BBB8D9;
        margin-top: 10px;
        height: 50px;

        @media (max-width: 768px) {
      height: 35px;
    }
`;

export const CepDataContent = styled.div`
    
    display: flex;
    align-items: center;

    input {
      width: 100%;
      margin: 10px;
    
    button {
      width: 1px;
      height: 35px;
      border: 0;
      color: #fff;
      justify-content: center;
      align-items: center;
      background: #4F46BB;
      border-radius: 25px;
    }
    @media (max-width: 768px) {
      margin: 5px;
    }
  }
`;

export const Dropdown = styled.option`

`;