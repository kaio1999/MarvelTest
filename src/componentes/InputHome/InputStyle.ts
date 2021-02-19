import styled from 'styled-components'

const InputHeroesStyle = styled.input.attrs({
    placeholder:"Please Enter Desired Character Name",
})`

    &&& {
        font-size: 30px;
        font-family: 'Bebas Neue', cursive;
        color:#fff;
        text-align:center;
        border-radius: 18px;
        width: 552px;
        height: 32px;
        padding: 8px 38px;
        background:#ef0b0b;
        &:hover{
            background:white;
            color:#ef0b0b;
            transition:0.5s;
        }
        &:focus{
            outline:none;
            
        }  
    }
`

export default InputHeroesStyle