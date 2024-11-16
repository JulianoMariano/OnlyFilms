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

  .tags, .buttons {
    display: flex;
    gap: 24px;
  }

  .inputs {
    display: flex;
    gap: 40px;
  }
  
  .tags {
    display: flex;
    align-items: center;
    background: black;

    border-radius: 8px;
    height: 88px;
    padding: 16px;
  }

  .buttons .buttonDelete{
    background-color: black;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Form = styled.form `
  max-width: 90vw;
  margin: 30px auto;

  header {
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin-bottom:20px;

    a, button {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.ORANGE};

      gap: 10px;
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