import styled from 'styled-components'
import backgroundSignIn from '../../assets/background_signUp.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form `
  padding: 0 136px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  >h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    }

  >h2 {
    font-size: 24px;
    margin: 48px;
  }

  p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  >a {
    display: flex;
    align-items: flex-end;
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    >svg {
      margin: 0 8px;
    }
  }
`

export const Background = styled.div `
  flex: 1;
  background: url(${backgroundSignIn}) no-repeat center;
  background-size: cover;
`