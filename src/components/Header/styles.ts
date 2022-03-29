import styled from 'styled-components'

export const Container = styled.header`
    background: #FFF;
    height: 80px;
      
`;

export const Content = styled.div`

max-width: 1172px;
  height: 80px;
  margin: 0 auto;
  margin-left: 20px;
  padding: auto 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

    button {
    
    background: #4F46BB;
    color: #fff;
    border: 0;
    border-radius: 71px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 40px;
    width: 160px;
    cursor: pointer;
    
    @media (max-width: 768px) {
      padding: 5px 20px;
      width: 120px;
      margin-right: 5px;
    }
}


`;