import { Container, Brand, Search, Main, Profile, Logout } from './styles'
import { MdOutlineMovieFilter } from 'react-icons/md';
import { useAuth } from "../../hooks/auth.jsx"
import { Input } from '../../components/Input'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export function Header() {
    const { signOut } = useAuth()
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
                        src='https://github.com/JulianoMariano.png'
                        alt='Foto do usuário'
                        />
                </Profile>
                <Logout>
                    <strong>Juliano Mariano</strong>
                    <Logout onClick={signOut}>
                        Sair
                    </Logout>
                </Logout>
            </Main>
        </Container>
    );
}