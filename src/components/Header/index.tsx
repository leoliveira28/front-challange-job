import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import { Button, Dropdown, Option } from '../Dropdown';
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
      const [optionValue, setOptionValue] = useState("");
      const handleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        console.log(e.target.value);
        setOptionValue(e.target.value);
      };
  
   
      
    return(
        <Container>
            <Content>
                <img src='/Title.svg' alt='Logo azul com texto empreendimentos em caixa alta'></img>
                <button onClick={toggle} type='button'>Adicionar +</button>
               <Modal isShown={isShown} hide={toggle} modalContent={
                    <div className='container'>
                    <h2>Editar empreendimento</h2>
                   <Dropdown
                   formLabel="Lançamento"
                   onChange={handleSelect}                  
                 >
                   <Option value="Breve lançamento"  />
                   <Option value="Lançamento"  />
                   <Option value="Em obras"  />
                   <Option value="Pronto para morar"  />
                 </Dropdown>
                   <Dropdown
                   formLabel="Residencial"
                   onChange={handleSelect}
                   
                 >
                   <Option value="Residencial"  />
                   <Option value="Comercial" />
                   </Dropdown>
                   <Button />
                   </div>
               }/>
                
            </Content>
        </Container>
    )
}