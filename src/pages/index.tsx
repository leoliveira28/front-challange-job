import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { Container, Content } from '../../styles/styles'
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
      adress: {
        city: item.city
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
           
            
    </Container>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/enterprises`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
  

