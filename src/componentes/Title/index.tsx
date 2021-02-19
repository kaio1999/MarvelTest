import { TitleStyledHeroes, LogoMarvel, LinksMarvelHeader }  from './TitleHeroesStyle'
import styled from 'styled-components'
import react from "react"


const DivLinksMarvel = styled.div`
    padding-top: 12px;
    padding-right: 50px;
`;


export const TitleHeroes = () => {
    return(
        <TitleStyledHeroes>
            <LogoMarvel src="../assets/images/thumbnail-marvel-character-logo.jpg"  alt="Logo Marvel"/>
            <DivLinksMarvel>
                <LinksMarvelHeader href="/">Home</LinksMarvelHeader>
                <LinksMarvelHeader href="https://www.marvel.com/corporate/about">About Marvel</LinksMarvelHeader>
            </DivLinksMarvel>
        </TitleStyledHeroes>

    )
}



