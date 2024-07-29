import { useState } from 'react'
import { FiMail, FiLock, FiUser, FiArrowLeft, } from 'react-icons/fi'
import { Container, Form, Background } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSigUp() {
    if(!name || !email || !password) {
      alert("Atenção, para realizar o cadastro preencha todos os campos")
      navigate("/")
    }
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else{
          alert("Não foi possível realizar o cadastro")
        }
      })
  }
  return(
    <Container>
      
      <Background />

      <Form>
        <h1>OnlyFilms</h1>
        <p>Aplicação perfeita para salvar seus filmes favoritos</p>
        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSigUp}/>

        <Link to="/">
          <FiArrowLeft size={20}/>
          Voltar para tela de login
        </Link>
      </Form>
    </Container>
  )
}