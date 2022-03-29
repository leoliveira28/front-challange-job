import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 1rem auto 4rem auto;
  padding-bottom: 1rem;
  border-bottom: 2px solid #BBB8D9 ;
  svg {
    width: 16;
    height: 16px;
    margin: 5px;
  }
  input {
    background: transparent;
    width: 100%;
    margin-left: 1.5rem;
    border: 0;
    color: #302E45;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    
    &:focus {
      outline: none;
    }
  }

    
`;



