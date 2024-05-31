import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
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
export const Search = styled.div `
    grid-area: search;
    padding: 64px 64px 0;
`
export const Content = styled.div `
    grid-area: content;
    padding: 64px 94px 0;
    overflow-y: auto;
` 
export const NewNote = styled(Link) `
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
export const Details = styled(Link)`
`