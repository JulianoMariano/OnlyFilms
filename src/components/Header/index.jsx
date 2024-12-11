import { Container, Brand, Search, Main, Profile, Logout } from './styles'
import avatarPLaceHolder from '../../assets/avatar_placeholder.svg'
import { MdOutlineMovieFilter } from 'react-icons/md';
import { Input } from '../../components/Input'
import { FiSearch } from 'react-icons/fi';
import { useAuth } from"../../hooks/auth"
import { api } from '../../services/api'
import { useState } from 'react'

export function Header({onSearch} ) {
    const { signOut, user } = useAuth("")

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPLaceHolder

    return(
        <Container>
            <Brand to="/">
                <h1>OnlyFilms<MdOutlineMovieFilter/></h1>
            </Brand>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo titulo" 
                    icon={FiSearch}
                    onChange={(e) => onSearch(e.target.value)}
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