import styled from 'styled-components'

export const Container = styled.span `
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 6px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    cursor: pointer;

`