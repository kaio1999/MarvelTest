import styled from 'styled-components'

export const DivHeroes = styled.div`
    display:flex;
    padding:0px 20px;
    margin-top:30px;
`;

export const DivTeste = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


export const ImageHeroes = styled.img`
    width: 330px;
    height:250px;
    display:flex;
    justify-content:space-around;
`;

export const IdHero = styled.a`
    text-decoration:none;
`;



export const DivCaixa = styled.div`
    font-size:30px;
    color:white;
    font-family:'Bebas Neue', cursive;
    text-transform:uppercase;
    text-align:center;
    margin:20px;
    text-decoration:none;
    background: #ef0b0b;
    border-radius: 10px;
    width: 330px;
    margin-top: 60px;
    &:hover,focus{
        background:#fff;
        color:#ef0b0b;
        transition:0.5s;
        transform:scale(1.1);
    }


`;

export const ReturnButton = styled.a`
    font-size:55px;
    background:red;
`;


