import { useEffect, useState } from 'react';
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { Container, Content } from '../../styles/styles'
import { Header } from '../components/Header'
import Modal from '../components/Modal';
import { SearchBox } from '../components/SearchBox'
import { api } from '../services/api';
import Router from 'next/router'
import { EnterpriseInfo } from '../components/EnterpriseInfo';

export interface Enterprise {
  id: string;
  name: string;
  status: string;
  purpose: string;
  ri_number: string;
  address: {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  };
}

 interface HomeProps {
    data: Enterprise[]
  }
  

export default  function Home( {data}: HomeProps ) {
  const [searchInput, setSearchInput] = useState('')
  const [enterprisesSearch, setEnterprisesSearch] = useState<Enterprise[]>(data)
  const [showModal, setShowModal] = useState(false);
  const [enterprises, setEnterprises] = useState<Enterprise[]>(data)

  

  useEffect(() => {
    async function enterprisesSearch() {
      if(searchInput != '') {
        const res = await api.get<Enterprise[]>(`/enterprises`);
        const enterprisesSearch = res.data.filter((enterprise) => {
          return enterprise.name.toLowerCase().includes(searchInput.toLowerCase());
          
        });
        console.log(enterprisesSearch)
        setEnterprisesSearch(enterprisesSearch);
      };
    };
    enterprisesSearch()
  }, [searchInput])
  const [currentPage, setCurrentPage] = useState(1)
  
  async function handlePagination(){
        const pages = await api.get(`/enterprises?_page=${currentPage + 1}&_limit=2`)
        setEnterprises([...enterprises, ...pages.data])
         setCurrentPage(currentPage + 1)
  }
  
  return (
    <>
    <Header />
    
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />

    <Container>
      <EnterpriseInfo enterprises={searchInput != '' ? enterprisesSearch : enterprises} />           
            <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
            title={'Cadastrar Empreendimento'}
            />
            
           <button className="btn" onClick={handlePagination}>Carregar mais</button>
             

    </Container>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/enterprises?_page=1&_limit=2`)
  const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }
}
  

