import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header `
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Main = styled(Link) `
    display: flex;
    align-items: center;
    gap: 5px;
`
export const Profile = styled(Link) `
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
export const Logout = styled.button `
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`
export const Search = styled.div `
    width: 50vw;
    height: fit-content;    
`
export const Brand = styled(Link) `
    >h1 {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
` 