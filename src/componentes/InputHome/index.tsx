import { useState } from 'react';
import InputHeroesStyle from './InputStyle'

const InputFinal = ({ setValue,onKeyDown }:any ) => {


    return(
        <div>
           <InputHeroesStyle
                onKeyDown={onKeyDown} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    event.preventDefault();
                    setValue(event.target.value);
                }}
            />
        </div>
        
    )
}


export default InputFinal
InputFinal.defaultProps={
    onKeyDown: ()=> {}

}
