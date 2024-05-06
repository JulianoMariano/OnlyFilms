import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Form = styled.form `
  max-width: 50vw;
  margin: 38px auto;

   header {
    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }
  }
  
  
  >input {
    display: grid;
    grid-template-rows: 250px 250px;
    grid-template-rows: 55px 55px 200px;
    grid-template-areas: 
    "header header"
    "content content"
    "content content"   
  }
`

