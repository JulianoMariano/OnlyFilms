import styled from "styled-components"
import { Link } from "react-router-dom";

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

export const Content = styled.div `
    max-width: 90%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    
    header {
        a, button {
            display: flex;
            align-items: center;
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.ORANGE};
    
            gap: 10px;
        }

        h1 {
            font-size: 36px;
            font-weight: 500;
            margin-top: 10px;
        }
    }
    
    > button:first-child(Link){
        align-self: start;
        background-color: red;
        
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
        margin-top: 40px;
    }
`
export const Profile = styled.div `
    display: flex;
    flex-direction: row-reverse;

    >img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    >div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;
        align-items: flex-end;
    }

    span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`


