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
  data: {
    name: string;
    adress: {
      city: string;
      street: string;
      number: string;
      district: string;
      
    }
  }
  }
  

export default function Home( {data}: HomeProp) {
  const results = data?.map(item => {
    return {
      _id: item._id,
       name: item.name,
       status: item.status,
       ri_number: item.ri_number,
       address: {
         city: item.address.city,
         street: item.address.street,
         number: item.address.number,
         district: item.address.district
       } 
      }
    }
  )
console.log(results)

  return (
    <>
    <Header />
      <SearchBox />

    <Container>
        {results.map(item => {
          return (
            <Content>
              <span>{item.name}</span>
            <address>{item.adress.street}, {item.adress.number} - {item.adress.district}, {item.adress.city}</address>
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
  

