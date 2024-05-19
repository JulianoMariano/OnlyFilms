import styled from 'styled-components'
import backgroundSignIn from '../../assets/background_login.jpg'

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
    align-self: flex-start;
    font-size: 40px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    }

  >h2 {
    align-self: flex-start;
    font-size: 24px;
    margin: 48px 0;
  }

  p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  >a {
    margin-top: 50px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Background = styled.div `
  flex: 1;
  background: url(${backgroundSignIn}) no-repeat center;
  background-size: cover;
`
