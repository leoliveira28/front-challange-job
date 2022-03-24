import { GetServerSideProps } from 'next/types';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles'

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
    data: EnterpriseProps[]
}
export  function Card(){ 
    //const [response, setResponse] = useState<EnterpriseProps[]>([])
        return(
        <Container>
            <span>Villega Villa Velha</span>
            <address>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</address>
        </Container>
        
    );
}


