import react, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import InputFinal from '../componentes/InputHome/index'
import ButtonFinal from '../componentes/ButtonHome/index'

const DivPadrao=styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const DivInput=styled.div`
  display:flex;
  justify-content:center;
  margin-top:38%;
`;
 

function Home() {
  const [ value, setValue ] = useState <string>()
  
  async function updateInput(e:any) {
    // if (e.key === 'Enter' && canLaunch && e.currentTarget.value != '') {
    if (e.key === "Enter" && e.currentTarget.value != "") {
      setValue(e.target.value);
      await resultSearch();
    }
  } 
  function resultSearch() {
    window.location.href = `/heroes?name=${value}`;
  }

  return (

    <DivPadrao>
        <DivInput>
          <InputFinal onKeyDown={updateInput} setValue={ setValue }/>
          <ButtonFinal onClick={ () => resultSearch() }/>
        </DivInput>
    </DivPadrao>
    
  );
}

export default Home;
