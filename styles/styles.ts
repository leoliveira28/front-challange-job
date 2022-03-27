import styled from 'styled-components'

export const Container = styled.div`
    widows: 1140px ;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
margin: 30px;
background: #FFFFFF;
width: 80%;
height: 114px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
border-radius: 8px;

svg {
    margin: 5px;
    color: #4F46BB
}
button {
    border: 0;
    background-color: #FFFFFF;
}
`;
