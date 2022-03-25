import { GetServerSideProps } from 'next/types';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles'


export  function Card(){ 
    //const [response, setResponse] = useState<EnterpriseProps[]>([])
        return(
        <Container>
            <span>Villega Villa Velha</span>
            <address>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</address>
        </Container>
        
    );
}


