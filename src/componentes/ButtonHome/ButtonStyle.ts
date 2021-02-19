import styled from 'styled-components'

const ButtonStyle = styled.button`
    background:white;
    font-size:20px;
    color:black;
    border:1px solid black;
    border-radius:10px;
    font-family:'Bebas Neue', cursive;
    background:#ef0b0b;
    padding:10px 10px;
    margin:2px 10px;
    &:hover {
        background:white;
        color:#ef0b0b;
        transition:0.5s;  
        cursor: pointer;

    }

`;

export default ButtonStyle