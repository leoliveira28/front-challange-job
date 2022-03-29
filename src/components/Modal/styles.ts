import styled from 'styled-components';

export const StyledModalTitle = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #302E45;

  @media (max-width: 768px) {
    margin: 2px;
    font-size: 18px;
  }
`;
export const StyledModalBody = styled.div`
  padding-top: 5px;  
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
    width: 14px;
    height: 14px;
    color: #4F46BB;
    
    svg {
    fill: #4F46BB;
    }
  }

  
`;

export const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 650px;
  border-radius: 15px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: 85%;
    padding: 2px;
  }
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