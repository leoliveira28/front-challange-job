import { useState } from 'react';
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import { Container, Content } from '../../styles/styles'
import { Header } from '../components/Header'
import Modal from '../components/Modal';
import { SearchBox } from '../components/SearchBox'
import { api } from '../services/api';
import Router from 'next/router'
import { useRouter } from 'next/router';
import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin';



interface EnterpriseProps {
  name: string;
  id: string;
  status: string;
  ri_number: string;
  adress: {
      district: string;
      city: string;
      street: string;
      state: string;
      number: string;
      cep: string;
  }

}

interface DataProps {
  data: EnterpriseProps[];
}

interface HomeProp {
      name: string;
      ri_number: string;
      status: string;
      id: string;
      purpose: string;
      address: {
      city: string;
      street: string;
      number: string;
      district: string;
      }
  }

  interface DataProp {
    data: HomeProp[];
    
  }
  

export default  function Home( {data}: DataProp ) {
  const [showModal, setShowModal] = useState(false);
  

  function handleDeleteEnterprise(event: { currentTarget: { id: any; }; }) {
      const itemId = event.currentTarget.id
      api.delete(`http://localhost:3001/enterprises/${itemId}`)
      
      Router.reload()

  }
  const [currentPage, setCurrentPage] = useState(1)
  const [pageLimit, setPageLimit] = useState(5)
  const [newPages, setNewPages] = useState();
  const [newData, setNewData] = useState();
  console.log(currentPage)

  async function handlePagination(){
        const pages = await api.get(`http://localhost:3001/enterprises`)
        .then(response => setNewPages(response.data))
         setCurrentPage(currentPage + 1)
         setPageLimit(pageLimit + 1)
        console.log(newPages)
  }
  
  return (
    <>
    <Header />
    
      <SearchBox />

    <Container>
        {  data?.map(item => {
          return (
            <>
            <Content>
              <span id={item.id} key={item.id}>{item.name} 
              <button onClick={() => setShowModal(true)}><BiEditAlt /></button>
              <button id={item.id}onClick={handleDeleteEnterprise}><BiTrash /></button>
              <span className="tag">{item.status}</span>
              <span className="tag1">{item.purpose}</span>
               </span>
              <address>{item.address.street}, {item.address.number} - {item.address.district}, {item.address.city}</address>
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

          {newPages?.map(item =>{
          return (
            <>
            <Content>
              <span id={item.id} key={item.id}>{item.name}
             <button onClick={() => setShowModal(true)}><BiEditAlt /></button>
              <button id={item.id}onClick={handleDeleteEnterprise}><BiTrash /></button>
              <span className="tag">{item.status}</span>
              <span className="tag1">{item.purpose}</span>
               </span>
               
              <address>{item.address.street}, {item.address.number} - {item.address.district}, {item.address.city}</address>
         
          </Content>
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
  const res = await fetch(`http://localhost:3001/enterprises`)
  const data = await res.json()
  console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}
  

