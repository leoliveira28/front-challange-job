import { useState } from 'react';
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { Container, Content } from '../../styles/styles'
import { Header } from '../components/Header'
import Modal from '../components/Modal';
import { SearchBox } from '../components/SearchBox'
import { api } from '../services/api';
import Router from 'next/router'

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

interface EnterprisesProps {
  enterprises: Enterprise[],
  setEnterprises: ([]) => void,
  page: number
}

  interface HomeProps {
    data: Enterprise[]
  }
  

export default  function Home( {data}: HomeProps ) {
  const [showModal, setShowModal] = useState(false);
  const [enterprises, setEnterprises] = useState<Enterprise[]>(data)

  function handleDeleteEnterprise(event: { currentTarget: { id: any; }; }) {
      const itemId = event.currentTarget.id
      api.delete(`http://localhost:3001/enterprises/${itemId}`)
      
      Router.reload()

  }
  const [currentPage, setCurrentPage] = useState(1)
  
  const [newPages, setNewPages] = useState();
  const [newData, setNewData] = useState();


  async function handlePagination(){
        const pages = await api.get(`/enterprises?_page=${currentPage + 1}&_limit=2`)
        setEnterprises([...enterprises, ...pages.data])
         setCurrentPage(currentPage + 1)
       
        console.log(newPages)
  }
  
  return (
    <>
    <Header />
    
      <SearchBox />

    <Container>
        {  enterprises?.map(item => {
          return (
            <>
            <Content>
              <span id={item.id} key={item.id}>{item.name} 
              <button onClick={() => setShowModal(true)}><BiEditAlt /></button>
              <button id={item.id}onClick={handleDeleteEnterprise}><BiTrash /></button>
              <span className="tag">{item.status}</span>
              <span className="tag1">{item.purpose}</span>
               </span>
              <address>{item.address.street}, {item.address.number} - {item.address.district}</address>
              <address>{item.address.city}</address> 
            </Content>
            
            <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
            title={'Editar Empreendimento'}
            >
            </Modal>
            </>    
          )
        })}
    
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
  console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}
  

