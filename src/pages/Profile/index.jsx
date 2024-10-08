import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'
import { useState } from 'react'
 
export function Profile(){
  const { user, updateProfile } = useAuth() 

  const [ name, setName ] = useState( user.name )
  const [ email, setEmail ] = useState( user.email )
  const [ oldPassword, setOldPassword ] = useState()
  const [ newPassword, setNewPassword ] = useState()

  async function handleUpdate(){
    const user = {
      name, 
      email,
      password: newPassword,
      old_password: oldPassword,
    }
    await updateProfile({ user })
  }

  return(
    <Container>
    
      <header>
        <Link to="/">
          <FiArrowLeft/>
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/julianomariano.png" 
            alt="Imagem de perfil do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
            id="avatar"
            type="file"
            />
          </label>

        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)} 
        />
        
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />
        
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>

      </Form>
    
    </Container>
  )
}