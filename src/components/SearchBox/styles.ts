import styled from 'styled-components'

export const Container = styled.div`
    margin: 30px;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;

    input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove #BBB8D9;
        width: 80%;
        padding: 4px;
        outline: none;
        background: #E5E5E5;
        }

    svg {
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }    

    span {
        margin-bottom: 2px solid;
    }
`;



