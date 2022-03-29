import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
margin: 0 0 30px auto;
background: #FFFFFF;
width: 100%;
height: 114px;
display: flex;
flex-direction: column;

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
.tag {
    margin-left: 50%;
    //align-self: flex-end;
    border: 1px solid;
    border-radius: 8px;
    padding: 3px;
}
.tag1 {
    margin-left: 5px;
    border: 1px solid;
    border-radius: 8px;
    padding: 3px;
}

`;
