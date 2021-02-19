import styled from 'styled-components'
import '../../styles/global.css'


export  const TitleStyledHeroes = styled.header`
    background: black;
    width:100%;
    text-decoration:none;
    display:flex;
    justify-content:space-between;
    position:fixed;
    top:0px;
    z-index:1;


`;

export const LogoMarvel = styled.img`
    width:150px;
    margin:0px 60px;
   
`;

export const LinksMarvelHeader = styled.a`
    background:#ef0b0b;
    color:white;
    font-size:25px;
    font-family: 'Bebas Neue', cursive;
    text-decoration:none;
    padding:10px 10px;
    border-radius:10px;
    margin:0px 14px;
        &:hover{
            background:#fff;
            color:red;
            transition:0.5s;
            border:none;
        }
 
`;
