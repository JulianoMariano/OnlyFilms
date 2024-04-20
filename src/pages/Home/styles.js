import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto; /*Nessa parte, estou dividindo minha página em 2, 250px ficará apenas a área do menu. A propriedade "auto" vai determinar automaticamente a área restante para o conteúdo da aplicação  */
    grid-template-rows: 105px 128px auto 64px; /*Teremos 4 linhas nessa página, a primeira é do header/ cabeçalho, a segunda linha é a caixa de diálogo do SEARCH, a terceira será o restante do conteúdo levando a propriedade "auto" e quarta, será o botão de NewNote */
    grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content";/*Agora, vamos distribuir as áreas do grid. Cada elemento, vai ao lado um do outro  */

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
export const Brand = styled.div `
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    >h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
` 
export const Menu = styled.ul `
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
    }
` 
export const Search = styled.div `
    grid-area: search;
    padding: 64px 64px 0;
`

export const Content = styled.div `
    grid-area: content;
    padding: 64px 64px 0;
    overflow-y: auto;
` 
export const NewNote = styled.button `
    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`
