import { Container } from "./styles";
import { FiSearch } from 'react-icons/Fi';

export function SearchBox() {
    return(
        <Container>
            <FiSearch />
            <input type='text' placeholder='Buscar' />
            <span />
        </Container>
    );
}