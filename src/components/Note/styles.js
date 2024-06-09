import styled from "styled-components"

export const Container = styled.button `
  display: flex;
  flex-direction: column;
  text-align: -webkit-left;
  width: 100%;
  background-color: rgb(255, 133, 155, 10%);
  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  >h1{
    flex: 1;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  >icons {
    display: flex;
    margin: 8px 0 15px 0;
    gap: 6px;
    color: ${({ theme }) => theme.COLORS.ORANGE} ;
  }

  >p {
    color: ${({ theme }) => theme.COLORS.WHITE};  
    overflow: hidden;
    position: relative;
    line-height: 1.2em;
    max-height: 6em; /* aqui vc controla a altura da caixa de texto */
    text-align: justify;
  }
  
  >p::before{
    content: '...';
    position: absolute;
    right: 0px;
    bottom: 0;
    padding: 0 0px 0 0.25em;
  }

  >footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`