import { useState } from 'react';
import ButtonStyle from './ButtonStyle'




const ButtonFinal = ({onClick}:any) => {
    return(
        <div>
           <ButtonStyle onClick={onClick}>
               Search
            </ButtonStyle>
        </div>
        
    )
}


export default ButtonFinal
ButtonFinal.defaultProps={
    onClick: ()=> {}
}
