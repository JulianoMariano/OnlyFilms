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
import { useState } from 'react'

export function New() {

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleAddTag() // Executa a função de login ao pressionar Enter
    }
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

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
            
          <Section title ="Marcadores">

            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={ () => handleRemoveTag(tag) }                    
                  />
                  )
                )
              }
              <NoteItem 
                isNew 
                  placeholder="Novo marcador"
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                  onKeyDown={handleKeyPress}
              />
              </div>
          </Section>
          
          <div className="buttons">
            <Button 
              className = "buttonDelete" 
              title="Excluir filme" 
            />
            <Button 
              className = "buttonSave"  
              title="Salvar alterações" 
            />
          </div>

        </Form>
      </main>
    </Container>
  )
}