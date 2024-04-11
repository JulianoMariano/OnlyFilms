import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid; /*vamos criar o grid para dizer onde cada parte do layout vai se encaixar */
    grid-template-rows: 105px auto; /*Dentro da aplicação, teremos 2 linhas. Uma para o cabeçalho e a outra para o corpo da pagina*/
    grid-template-areas: 
    "header"
    "content" /*Com o grid-template-areas nós iremos nomear essas áreas para aplicar o grid-template-rows*/
`