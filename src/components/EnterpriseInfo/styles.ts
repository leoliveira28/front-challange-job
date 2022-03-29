import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
margin: 0 0 30px auto;
background: #FFFFFF;
width: 100%;
height: 135px;
display: flex;
flex-direction: column;

padding: 32px;
box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
border-radius: 8px;
@media (max-width: 768px) {
        padding: 10px;
    }

svg {
    margin: 5px;
    color: #4F46BB
}
button {
    border: 0;
    background-color: #FFFFFF;
}
    

 
`;

export const Adress = styled.address`
    padding: 5px;
    color: #6D6C7B;
    font-weight: 400;
    font-size: 14px;
    
`;

export const EnterpriseContainer = styled.div`
color: #302E45;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
display: flex;
align-items: space-between;


`;

export const Tag = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
margin: 5px;
border: 1px solid #302E45;
border-radius: 8px;
padding: 2px;


`;