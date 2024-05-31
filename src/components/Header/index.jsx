import { Container, Brand, Search, Profile, Logout } from './styles'
import { MdOutlineMovieFilter } from 'react-icons/md';
import { RiShutDownLine } from 'react-icons/ri'
import { Input } from '../../components/Input'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export function Header() {
    return(
        <Container>
            <Brand to="/">
                <h1>OnlyFilms<MdOutlineMovieFilter/></h1>
            </Brand>
            
            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
            </Search>
            
            <Profile to="/profile">
                <img
                    src='https://github.com/JulianoMariano.png'
                    alt='Foto do usuário'
                />
                <div>
                    <strong>Juliano Mariano</strong>
                    <Logout>
                        Sair
                    </Logout>
                </div>
            </Profile>
            
        </Container>
    );
}