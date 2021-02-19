import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

header{
    background:grey;
}


body {
    font-family:"Bangers", cursive; 
    background-image:url(../assets/images/bg-marvel.jpg);
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-size: 100%;
}
`;