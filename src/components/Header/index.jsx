import { Container, Brand, Search, Main, Profile, Logout } from './styles'
import avatarPLaceHolder from '../../assets/avatar_placeholder.svg'
import { MdOutlineMovieFilter } from 'react-icons/md';
import { Input } from '../../components/Input'
import { FiSearch } from 'react-icons/fi';
import { useAuth } from"../../hooks/auth"
import { api } from '../../services/api'
import { useState, useEffect } from 'react'

export function Header() {
    const [ search, setSearch ] = useState("")
    const [ notes, setNotes ] = useState("")
    const { signOut, user } = useAuth([])

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPLaceHolder

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [ search ])

    return(
        <Container>
            <Brand to="/">
                <h1>OnlyFilms<MdOutlineMovieFilter/></h1>
            </Brand>
            
            <Search>
                <Input 
                    placeholder="Pesquisar pelo titulo" 
                    icon={FiSearch}
                     onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Main>
                <Profile to="/profile">
                    <img
                        src={avatarURL}
                        alt={user.name}
                        />
                </Profile>
                <Logout>
                    <strong>{user.name}</strong>
                    <Logout onClick={signOut}>
                        Sair
                    </Logout>
                </Logout>
            </Main>
        </Container>
    );
}