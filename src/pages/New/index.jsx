import { ButtonText } from '../../components/ButtonText'
import { NoteItem } from  '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Header }  from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useNavigate} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './styles'
import { api } from "../../services/api"
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

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

 async function handleNewNote(){
  const validations = [
    {condition: !title, message: "Por favor, preencha o Título do filme."},
    {condition: !rating, message: "Por favor, preencha sua avaliação do filme."},
    {condition: !description, message: "Por favor, preencha a descrição do filme."},
    {condition: newTag, message: "Verifique a seção Gêneros para prosseguir com a ação."}
  ]

  for (const validation of validations) {
    if (validation.condition) {
      return alert(validation.message)
    }
  }

  await api.post("/notes",{
    title,
    rating,
    description,
    tags
  })
  alert("Nota cadastrada com sucesso!!")
  navigate("/")
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
            <Input 
              placeholder="Título do filme"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type="number" 
              placeholder="Sua nota (de 0 a 5)"
              min="0"
              max="5"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
            placeholder="Descrição detalhada do filme"
            onChange={e => setDescription(e.target.value)}
          />
            
          <Section title ="Gêneros do Filme">

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
                  placeholder="Novo gênero"
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
              title="Salvar Filme" 
              onClick={handleNewNote}
            />
          </div>

        </Form>
      </main>
    </Container>
  )
}