import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { Container, Content } from '../../styles/styles'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { SearchBox } from '../components/SearchBox'
import { api } from '../services/api'



interface EnterpriseProps {
  name: string;
  _id: string;
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
      _id: string;
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
  

export default  function Home( {data}: DataProp) {

data.map(item => {
  console.log(item.address.city)
})

  return (
    <>
    <Header />
    
      <SearchBox />

    <Container>
        {  data?.map(item => {
          return (
            
            <Content>
              <span>{item.name}</span>
              <address>{item.address.street}, {item.address.number} - {item.address.district}, {item.address.city}</address>
            </Content>
            
          )
        })}    
            
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
  

