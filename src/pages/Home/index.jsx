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
      <Brand>
        <h1>NoteScribble</h1>
      </Brand>

      <Header>
        
      </Header>

      <Menu>
        <li>
          {" "}
          <ButtonText title="Todos" isactive />{" "}
        </li>
        <li>
          {" "}
          <ButtonText title="Frontend"/>{" "}
        </li>
        <li>
          {" "}
          <ButtonText title="React" />{" "}
        </li>
        <li>
          {" "}
          <ButtonText title="Node" />{" "}
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>

      <Content>
        <Section title = "Minhas Notas">
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

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
