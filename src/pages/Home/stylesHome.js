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
` 
export const Menu = styled.ul `
` 
export const Search = styled.div `
` 
export const Content = styled.div `
` 
export const NewNote = styled.button `
`
