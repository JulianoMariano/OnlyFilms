import { Container, Brand, Search, Main, Profile, Logout } from './styles'
import { MdOutlineMovieFilter } from 'react-icons/md';
import { useAuth } from "../../hooks/auth.jsx"
import { Input } from '../../components/Input'
import { FiSearch } from 'react-icons/fi';
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

export function Header() {
    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPLaceHolder

    return(
        <Container>
            <Brand to="/">
                <h1>OnlyFilms<MdOutlineMovieFilter/></h1>
            </Brand>
            
            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
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