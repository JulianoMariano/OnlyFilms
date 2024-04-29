import { RiShutDownLine } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi';

import { Container, Brand, Search, Profile, Logout } from './styles'

import { Input } from '../../components/Input'


export function Header() {
    return(
        <Container>
            <Brand>
                <h1>NodeMovies</h1>
            </Brand>
            
            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
            </Search>
            
            <Profile>
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