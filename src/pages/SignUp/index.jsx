import { FiMail, FiLock, FiUser, FiArrowLeft, } from 'react-icons/fi'
import {  Container, Form, Background } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignUp() {
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
        />
        
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

        <Button title="Cadastrar"/>

        <Link to="/">
          <FiArrowLeft size={20}/>
          Voltar para tela de login
        </Link>
      </Form>
    </Container>
  )
}