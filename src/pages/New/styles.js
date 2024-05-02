import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  height: 100vh;
`

export const Form = styled.form `
  max-width: 550px;
  margin: 38px auto;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`