import { Container, Brand, Search, Content, NewNote, Details } from "./styles";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { FiPlus, FiStar } from "react-icons/fi";
import { Note } from "../../components/Note";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { FaStar } from 'react-icons/fa';

export function Home() {
  const [ search, setSearch ] = useState("")
  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
      }
      
      fetchNotes()

    }, [search])
    
    return (
    <Container>

      <Header/>

        <main>
          <Content>

            <header>
              <NewNote Link to="/new">
                <FiPlus />
                Adicionar filme
              </NewNote>
              <h1>Meus Filmes</h1>
            </header>
            
            <div className="filmes">
              <Details link to="/details/:id">
              {
                notes.map(note => (
                <Note 
                  key={String(note.id)}
                  data={note}
                />
                ))
              }
              </Details>
            </div>
          </Content>
        </main>

    </Container>
  );
}
