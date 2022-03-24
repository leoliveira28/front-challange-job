import Image from 'next/image';
import { Container, Content } from './styles';


export function Header() {
    return(
        <Container>
            <Content>
                <img src='/Title.svg' alt='Logo azul com texto empreendimentos em caixa alta'></img>
                <button type='button'>Adicionar +</button>
                
                
            </Content>
        </Container>
    )
}