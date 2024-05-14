import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Note } from "../../components/Note";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Header>
      </Header>

      <Content>
        <Section title = "Meus Filmes">
            <NewNote link to="/new">
              <FiPlus />
                Criar nota
            </NewNote>
            <Note data={
                {
                  title: 'React Modal', 
                tags: [
                    {id: '1', name: 'react'}
                ]
            }}
            />
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
