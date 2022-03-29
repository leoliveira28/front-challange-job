import React from "react";
import  Router  from "next/router";
import { useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi"
import { api } from "../../services/api";
import { Content } from "./styles";

import ModalEdit from "../ModalEdit";

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
    }
    };

interface Props {
    enterprises: Enterprise[];
    

}

export function EnterpriseInfo({enterprises }: Props) {
    const [showModal, setShowModal] = useState(false);
    const [itemId, setItemId] = useState('')

   function handleDeleteEnterprise(event: { currentTarget: { id: any; }; }) {
        const itemId = event.currentTarget.id
        api.delete(`http://localhost:3001/enterprises/${itemId}`) 
        Router.reload()
      }
    const router = Router;
    function editEnterprise(event: { currentTarget: { id: any; }; }) {
        const itemId = event.currentTarget.id
        setItemId(itemId)
        setShowModal(true)
    }  
   
    return(    
        
           enterprises?.map(item => {
            return (
              <>
              <Content  key={item.id}>
                <span id={item.id} >{item.name} 
                <button onClick={editEnterprise}><BiEditAlt /></button>
                <button id={item.id}onClick={handleDeleteEnterprise}><BiTrash /></button>
                <span className="tag">{item.status}</span>
                <span className="tag1">{item.purpose === "RELEASE" ? "Lançamento" : (item.purpose === "HOME" ? "Residencial" : '') }</span>
                 </span>
                <address>{item.address.street}, {item.address.number} - {item.address.district}</address>
                <address>{item.address.city}</address> 
                </Content>
                <ModalEdit
                onClose={() => setShowModal(false)}
                show={showModal}
                title={'Editar Empreendimento'}
                id={itemId}
        />
                </>
                
                )})

                

    )
}