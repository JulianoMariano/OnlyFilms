import styled from 'styled-components'

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

  .inputs, .tags, .buttons {
    display: flex;
    gap: 10px;
  }

`

export const Form = styled.form `
  max-width: 50vw;
  margin: 38px auto;

   header {
    margin-bottom: 36px;

    a {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      gap: 10px;
      margin-bottom: 10px;
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

