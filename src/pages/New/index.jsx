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
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleAddLink() // Executa a função de login ao pressionar Enter
    }
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
                  links.map((link, index) => {
                    <NoteItem
                      key={String(index)}
                      value={link}
                      onClick={ () => {} }

                    
                    />
                  })
                }
                <NoteItem 
                  isNew 
                  placeholder="Novo marcador"
                  value={newLink}
                  onChange={e => setNewLink(e.target.value)}
                  onClick={handleAddLink}
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