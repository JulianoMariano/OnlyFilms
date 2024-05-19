import { Link } from 'react-router-dom'
import { Note } from "../../components/Note";
import { FiPlus, FiStar } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container, Brand, Content, NewNote, Details } from "./styles";

export function Home() {
  return (
    <Container>
      <Header>
      </Header>

      <Content>
          <NewNote Link to="/new">
            <FiPlus />
            Criar nota
          </NewNote>
        <Section title = "Meus Filmes">
          <Details link to="/details/:id">
            <Note data={ 
              {
                title: 'Interestellar',
                tags: [
                  {id: '1', name: 'Ficção Cientifica'},
                  {id: '2', name: 'Drama'},
                  {id: '3', name: 'Familia'}
                ]
              }}
            />
          </Details>
          <Note data={
            {
              title: 'Exemplo de Middleware', 
              tags: [
                {id: '1', name: 'express'},
                {id: '2', name: 'nodejs'}
              ]
            }}
          />
        </Section>
      
      </Content>

    </Container>
  );
}
