import { Container } from "./styles";
import { FiSearch } from 'react-icons/Fi';

interface SearchBoxProps{
    searchInput: string;
    setSearchInput: (value: string) => void;
}
export function SearchBox({searchInput, setSearchInput }:SearchBoxProps ) {
    return(
        <Container>
            <FiSearch />
            <input value={searchInput} onChange={(event => setSearchInput(event.target.value))} type='text' placeholder='Buscar' />
        </Container>
    );
}