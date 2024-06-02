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
        <header>
          <NewNote Link to="/new">
            <FiPlus />
            Adicionar filme
          </NewNote>
          <h1>Meus Filmes</h1>
        </header>
        
        <main id='Meus Filmes'>
            <Details link to="/details/:id">
              <Note data={ 
                {
                  title: 'Interestellar',
                  subTitle: 'star',
                  tags: [
                    {id: '1', name: 'Ficção Cientifica'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Familia'}
                  ]
                }}
              />
            </Details>
            <Details link to="/details/:id">
              <Note data={ 
                {
                  title: 'Interestellar',
                  subTitle: 'star',
                  tags: [
                    {id: '1', name: 'Ficção Cientifica'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Familia'}
                  ]
                }}
              />
            </Details>
            <Details link to="/details/:id">
              <Note data={ 
                {
                  title: 'Interestellar',
                  subTitle: 'star',
                  tags: [
                    {id: '1', name: 'Ficção Cientifica'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Familia'}
                  ]
                }}
              />
            </Details>
            <Details link to="/details/:id">
              <Note data={ 
                {
                  title: 'Interestellar',
                  subTitle: 'star',
                  tags: [
                    {id: '1', name: 'Ficção Cientifica'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Familia'}
                  ]
                }}
              />
            </Details>
            <Details link to="/details/:id">
              <Note data={ 
                {
                  title: 'Interestellar',
                  subTitle: 'star',
                  tags: [
                    {id: '1', name: 'Ficção Cientifica'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Familia'}
                  ]
                }}
              />
            </Details>
        </main>
      </Content>

    </Container>
  );
}
