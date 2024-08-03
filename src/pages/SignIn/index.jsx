import {  Container, Form, Background } from './styles'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom' 
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const data = useAuth()
  console.log("MEU CONTEXTO =>", data)
  
  return(
    <Container>
      <Form>
        <h1>OnlyFilms</h1>
        <p>Aplicação perfeita para salvar seus filmes favoritos</p>
        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Entrar" />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background />
    </Container>
  )
}