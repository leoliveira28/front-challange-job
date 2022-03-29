import  Router  from "next/router";
import { SetStateAction, useState } from "react";
import { api, getCep } from "../../services/api";
import { Content, Dropdown, InputForm, InputLabel, Form, CepDataContent } from "./styles";


interface CepProps {
  bairro: string,
  localidade: string,
  logradouro: string,
  uf: string,
  numero: string,
  cep: string;
  
}

interface Props {
  id: string
}


export function EditModalForm({id}: Props)  {
  const [buildStatus, setBuildStatus] = useState("");
  const handleSelectStatus = (e: { target: { value: SetStateAction<string>; }; }) => {
  const [idItem, setIdItem]  = useState(id)
 
    setBuildStatus(e.target.value);
  };
  
  const [buildType, setBuildType] = useState("");
  const handleBuildType = (e: { target: { value: SetStateAction<string>; }; }) => {
    setBuildType(e.target.value);
  };
  const [enterpriseName, setEnterpriseName] = useState("");
  const handleEnterpriseName = (e: { target: { value: SetStateAction<string>; }; }) => {
    
    setEnterpriseName(e.target.value);
  };
  
  const [cep, setCep] = useState("");
  const handleCep = (e: { target: { value: SetStateAction<string>; }; }) => {
    
    setCep(e.target.value);
  };
  const [cepData, setCepData] = useState<CepProps>({} as CepProps);
  const [isLoading, setLoading] = useState(true)
  
  async function getCepInfo() {
    const results = await getCep.get(`${cep}/json`)
    .then(res => res.data)
    setCepData(results)
    setLoading(false)
  };

  const router = Router
  
  function handleEditInfo() {
    
    api.put(`/enterprises/`, {
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
  router.reload()
     
}

return (
  <Form onSubmit={handleEditInfo}>
  
  <InputLabel htmlFor="lancamento">Lançamento</InputLabel>
  <Content onChange={handleSelectStatus }id='lancamento' name='Lançamento'>
  <Dropdown  value='Breve lançamento' >Breve lançamento</Dropdown>
  <Dropdown value="Lançamento">Lançamento</Dropdown>
  <Dropdown value="Em obras">Em obras</Dropdown>
  <Dropdown value="Pronto para morar">Pronto para morar</Dropdown>
  </Content>
  <InputLabel htmlFor="Nome do empreendimento">Nome do empreendimento</InputLabel>
  <InputForm onChange={handleEnterpriseName} id="#" name="Nome do empreendimento" type="text"  required />
  <InputLabel htmlFor="Residencial">Residencial</InputLabel>
  <Content onChange={handleBuildType } id='residencial' name='residencial'>
  <Dropdown>Residencial</Dropdown>
  <Dropdown>Comercial</Dropdown>
  </Content>
  <InputLabel htmlFor="CEP">CEP</InputLabel>
  <CepDataContent>
  
  <InputForm onChange={handleCep} type="number" name='CEP' placeholder="CEP"/>
  <button type="button" onClick={getCepInfo}>Buscar</button>
  </CepDataContent>
  {isLoading ? <p>Carregando...</p> :
  <div>
  <address>{cepData.logradouro}</address>
  <address>{cepData.bairro}</address>
  <address>{cepData.localidade}</address>
  <address>{cepData.uf}</address>
  
  </div>
}
<button type="submit">Cadastrar</button>
</Form>
)
}