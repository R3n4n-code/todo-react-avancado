import { useState, useEffect } from 'react'
import useTudo from './hookpersonalizado'
import "../App.jsx"
const API = ("https://crudcrud.com/api/2d7bf5d3c7fc4cef96b3f0362c301b54/tarefas")

export async function Cria_Tarefa(valor) {
    
    

    const resposta = await fetch(API, {


        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: valor,

        })
        
    }
    )

    const dados = await resposta.json();

    

}

export async function Pegar_Tarefa() {
    const respostaGET = await fetch(API) 
    
    const dadosGET = await respostaGET.json()

    

    return dadosGET
}

export function enviar(e) {

    e.preventDefault()
}

 export async function deletar(_id) {
    fetch(`${API}/${_id}`, { 
        method: "DELETE",

    })
}

export async function pegar_valor(valor) {

    console.log(valor)
    
}
export async function atualizar(tarefa) {

  await fetch(

    `${API}/${tarefa._id}`,

    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({

        title: tarefa.title,

        concluida:
          !tarefa.concluida

          
      })
    }
  )
}