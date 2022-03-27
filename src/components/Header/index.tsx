import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import { Button, Dropdown, Option } from '../Dropdown';
import Modal from '../Modal';
import { Container, Content } from './styles';


export function Header() {
    const [showModal, setShowModal] = useState(false);
    return(
        <Container>
            <Content>
                <img src='/Title.svg' alt='Logo azul com texto empreendimentos em caixa alta'></img>
                <button onClick={() => setShowModal(true)} type='button'>Adicionar +</button>
                <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          title={'Editar Empreendimento'}
          
        >
          
        </Modal>                 
            </Content>
        </Container>
    )
}