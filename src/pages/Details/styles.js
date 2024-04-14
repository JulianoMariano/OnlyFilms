import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid; /*vamos criar o grid para dizer onde cada parte do layout vai se encaixar */
    grid-template-rows: 105px auto; /*Dentro da aplicação, teremos 2 linhas. Uma para o cabeçalho e a outra para o corpo da pagina*/
    grid-template-areas: 
    "header"
    "content"; /*Com o grid-template-areas nós iremos nomear essas áreas para aplicar o grid-template-rows*/

    > main {
        grid-area: content; /*- usaremos o main para aplicar a região do grid nela */
        overflow-y: auto; /*- Quando falamos do eixo Y estamos nos referindo ao eixo vertical e o scroll é o método de limitação, se o conteúdo não couber mais na vertical, ele vai habilitar uma barra de rolagem automaticamente*/
        padding: 64px 0;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;
        
        > a {
            color:  ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div `
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child{
        align-self: end;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }
`


