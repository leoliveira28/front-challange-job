import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../Modal';
import { Container, Content } from './styles';


export function Header() {
    const useModal = () => {
        const [isShown, setIsShown] = useState<boolean>(false);
        const toggle = () => setIsShown(!isShown);
        return {
          isShown,
          toggle,
        };
      };
      const { isShown, toggle } = useModal();
      const sendInfo = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
      }
      
    return(
        <Container>
            <Content>
                <img src='/Title.svg' alt='Logo azul com texto empreendimentos em caixa alta'></img>
                <button onClick={toggle} type='button'>Adicionar +</button>
               <Modal isShown={isShown} hide={toggle} modalContent={
               <form onSubmit={sendInfo}>
                   <h2>Cadastrar empreendimento</h2>

                <label htmlFor="Lançamento">Lançamento</label>
                <input id="#" name="Lançamento" type="text"  required />
                <label htmlFor="Nome do empreendimento">Nome do empreendimento</label>
                <input id="#" name="Nome do empreendimento" type="text"  required />

                <label htmlFor="Residencial">Residencial</label>
                <input id="#" name="Residencial" type="text"  required />

                <label htmlFor="CEP">CEP</label>
                <input id="#" name="CEP" type="text" required />
                <div className='cep-info'>
                    Av. Anselmo Liso
                    Jd. Numes
                    São José do Rio Preto
                    SP  
                </div>
                <button type="submit">Cadastrar</button>
                </form>}/>
                
            </Content>
        </Container>
    )
}