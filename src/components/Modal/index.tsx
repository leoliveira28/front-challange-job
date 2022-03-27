import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import { api, getCep } from "../../services/api";

interface AddressProps {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }

const Modal = ({ show, onClose, children, title }) => {
  
  const router = useRouter()
  const [isBrowser, setIsBrowser] = useState(false);
  const [buildStatus, setBuildStatus] = useState("");
  const handleSelectStatus = (e) => {
    console.log(e.target.value);
    setBuildStatus(e.target.value);
  };

  const [buildType, setBuildType] = useState("");
  const handleBuildType = (e) => {
    console.log(e.target.value);
    setBuildType(e.target.value);
  }
  const [enterpriseName, setEnterpriseName] = useState("");
  const handleEnterpriseName = (e) => {
    console.log(e.target.value);
    setEnterpriseName(e.target.value);
  }

  const [cep, setCep] = useState("");
  const handleCep = (e) => {
    console.log(e.target.value);
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

    

    useEffect(() => {

          }, [])
    
    console.log(isLoading)
    

  const handleNewInfo = (e) => {
    api.post('http://localhost:3001/enterprises', {
    id: Math.floor(Math.random() * 101),
    name: String(enterpriseName),
    status: String(buildStatus),
    purpose: String(buildType),
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
    router.push('/')
    onClose()

    
  }

  useEffect(() => {
    setIsBrowser(true);
    

  }, []);

  const handleCloseClick = (e) => {
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
                   <option  value='breve-lancamento' >Breve lançamento</option>
                   <option value="lancamento">Lançamento</option>
                   <option value="em-obras">Em obras</option>
                   <option value="pronto-para-morar">Pronto para morar</option>
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

const StyledModalTitle = styled.h2`
  margin: 10px;
`;
const StyledModalBody = styled.div`
  padding-top: 5px;

  form {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 5px;
  justify-content: center;
  
  select {
  max-width: 100%;
  height: 50px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
 
  }
  label {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove #BBB8D9;
        margin-top: 10px;
        height: 50px;
  }

  button {
    background: #4F46BB;
    color: #fff;
    border: 0;
    border-radius: 71px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    width: 150px;
    cursor: pointer;
    margin-top: 10px;
  }
  .cep {
    display: flex;
    align-items: center;

    input {
      width: 50%;
      margin: 10px;
    }
    button {
      width: 50px;
      height: 50px;
      justify-content: center;
      align-self: baseline;
    }
    p {
      padding: 10px;

    }
  }
  }
  
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;

  button {
    border: 0;
    padding: 1px;
    margin: 10px;
    background: #fff;
    height: 10px;
  }
`;

const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 650px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;