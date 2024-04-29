import styled from 'styled-components'

export const Container = styled.header `
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: center;

    padding: 0 80px;

    position: absolute;
`
export const Profile = styled.div `
    display: flex;
    align-items: center;
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
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`
export const Search = styled.div `
    display: flex;
    width: 50vw;
    height: fit-content;
    
    padding: 30px;
    margin: 0 auto;
    
`
export const Brand = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    
    >h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
` 