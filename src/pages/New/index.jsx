import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'

export function New() {
  return(
    <Container>
      <Header />
      
      <main>
        <Form>
          <header>
            <a href="/">Voltar</a>
            <h1>Novo Filme</h1>
          </header>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />

          <Textarea placeholder="Observações"/>

          <Section title ="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo Link"/>
          </Section>


        </Form>
      </main>
    </Container>
  )
}