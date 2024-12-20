import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from 'react-icons/fi'
import avatarPLaceHolder from '../../assets/avatar_placeholder.svg'
import { Container, Form, Avatar } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export function Profile(){
  const { user, updateProfile } = useAuth() 

  const [ name, setName ] = useState( user.name )
  const [ email, setEmail ] = useState( user.email )
  const [ oldPassword, setOldPassword ] = useState()
  const [ newPassword, setNewPassword ] = useState()
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPLaceHolder
  const [ avatar, setAvatar ] = useState(avatarURL)
  const [ avatarFile, setAvatarFile ] = useState(null)

  async function handleUpdate(){
    const user = {
      name, 
      email,
      password: newPassword,
      old_password: oldPassword,
    }
    await updateProfile({ user, avatarFile }) 
  }
  
  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
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
            src={avatar} 
            alt="Imagem de perfil do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
            id="avatar"
            type="file"
            onChange={handleChangeAvatar}
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