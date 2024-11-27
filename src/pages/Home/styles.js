import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    >main::-webkit-scrollbar {
        width: 10px;
    }
      
    >main::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.BACKGROUND900};
    } 

    >main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.ORANGE};  
        border-radius: 20px;
        border: 3px;
    }
    
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

    >section{
        display: flex;
    }

    >h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
` 
export const Search = styled.div `
    grid-area: search;
    padding: 64px 64px 0;
`
export const NewNote = styled(Link) `
    width: 200px;

    justify-content: center;
    align-items: center;
    display: flex;
    border: none;
    
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};


    svg {
        margin-right: 8px;
    }
`
export const Content = styled.div `
    grid-area: content;
    padding: 64px 94px 0;

    >header {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-bottom: 40px;

        h1{
            font-weight: normal;
        }
        
        .filmes {
            text-overflow: ellipsis;
        }
    }
` 
export const Details = styled(Link)`

`