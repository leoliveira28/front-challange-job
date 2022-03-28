
import { SetStateAction, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { api, getCep } from "../../services/api";
import Router from 'next/router'
import { StyledModal, StyledModalBody, StyledModalHeader, StyledModalOverlay, StyledModalTitle } from "./styles";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
}

const Modal = ({ show, onClose, children, title }: ModalProps) => {
  
  
  const [isBrowser, setIsBrowser] = useState(false);
  const [buildStatus, setBuildStatus] = useState("");
  const handleSelectStatus = (e: { target: { value: SetStateAction<string>; }; }) => {
    
    setBuildStatus(e.target.value);
  };

  const [buildType, setBuildType] = useState("");
  const handleBuildType = (e: { target: { value: SetStateAction<string>; }; }) => {
    
    setBuildType(e.target.value);
  }
  const [enterpriseName, setEnterpriseName] = useState("");
  const handleEnterpriseName = (e: { target: { value: SetStateAction<string>; }; }) => {
    
    setEnterpriseName(e.target.value);
  }

  const [cep, setCep] = useState("");
  const handleCep = (e: { target: { value: SetStateAction<string>; }; }) => {
    
    setCep(e.target.value);
     }
  const [cepData, setCepData] = useState(null);
  const [isLoading, setLoading] = useState(true)
  async function getCepInfo() {
    const results = await getCep.get(`${cep}/json`)
    .then(res => res.data)
    setCepData(results)
    setLoading(false)
    }
    

  const handleNewInfo = () => {
    api.post('http://localhost:3001/enterprises', {
    id: Math.floor(Math.random() * 101),
    name: enterpriseName,
    status: buildStatus,
    purpose: buildType,
    ri_number: '1233212',
    address: {
      district: cepData.bairro,
      city: cepData.localidade,
      street: cepData.logradouro,
      state: cepData.uf,
      number: '56',
      cep: cep
    }
    }
    
  )
    Router.reload()
    onClose()

    
  }

  useEffect(() => {
    setIsBrowser(true);
    

  }, []);

  const handleCloseClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onClose();
    
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <button onClick={handleCloseClick}>
            x
          </button>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{
          <form onSubmit={handleNewInfo}>
              
                 <label htmlFor="lancamento">Lançamento</label>
                 <select onChange={handleSelectStatus }id='lancamento' name='Lançamento'>
                   <option  value='Breve lançamento' >Breve lançamento</option>
                   <option value="Lançamento">Lançamento</option>
                   <option value="Em obras">Em obras</option>
                   <option value="Pronto para morar">Pronto para morar</option>
                 </select>
                 <label htmlFor="Nome do empreendimento">Nome do empreendimento</label>
                <input onChange={handleEnterpriseName} id="#" name="Nome do empreendimento" type="text"  required />
                <label htmlFor="Residencial">Residencial</label>
                 <select onChange={handleBuildType } id='residencial' name='residencial'>
                   <option>Residencial</option>
                   <option>Comercial</option>
                   </select>
                   <label htmlFor="CEP">CEP</label>
                 <div className='cep'>
                 
                 <input onChange={handleCep} type="number" name='CEP' placeholder="CEP"/>
                 <button type="button" onClick={getCepInfo}>Buscar</button>
                 </div>
                 {isLoading ? <p>Carregando...</p> :
                 <div>
                    <address>{cepData.logradouro}</address>
                     <address>{cepData.bairro}</address>
                     <address>{cepData.localidade}</address>
                     <address>{cepData.uf}</address>

                 </div>
                 }
                 <button type="submit">Cadastrar</button>
        </form>
        
        }</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};



export default Modal;