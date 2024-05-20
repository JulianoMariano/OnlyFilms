import { ButtonText } from '../../components/ButtonText'
import { NoteItem } from  '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Header }  from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

export function New() {
  return(
    <Container>
      <Header />
      
      <main>
        <Form>
          <header>
            <Link to = "/">
              <FiArrowLeft/>
              <ButtonText title='Voltar'/>            
            </Link>
            <h1>Novo Filme</h1>
          </header>
          
          <div className="inputs">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações"/>

          <Section title ="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo Link"/>
          </Section>
          
          <Section title ="Marcadores">
            <span>
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Nova tag"/>
            </div>
            </span>
          </Section>
          
          <div className="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>

        </Form>
      </main>
    </Container>
  )
}