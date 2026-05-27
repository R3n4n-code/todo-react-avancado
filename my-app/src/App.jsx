import { useState, useEffect, useMemo } from 'react'
import Tarefa from './Componentes/Tarefa.jsx'
import "./Visual/app.css"
import useTudo from "./Componentes/hookpersonalizado.jsx"
import { Cria_Tarefa,Pegar_Tarefa, enviar, deletar, atualizar } from "./Componentes/funções.jsx"

function App() {
const {valor,onChange,limpar} = useTudo()  
const [taref, setTarefa] = useState([])
const [filtro,setFiltro] = useState("Todos")
const tarefasFiltradas = useMemo(() => {

    if(filtro === "concluida") {

      return taref.filter(
        (tarefa) =>
          tarefa.concluida
      )
    }

    if (filtro === "pendentes") {

      return taref.filter(
        (tarefa) =>
          !tarefa.concluida
      )
    }

    return taref

  }, [taref, filtro])

async function adicionar() {
 await Cria_Tarefa(valor)

  await Carregar()

  limpar()
}

async function Carregar() {
  const dadosGET = await Pegar_Tarefa()
    console.log(dadosGET)
    setTarefa(dadosGET)
}

useEffect(() => {
  Carregar()
  
},[])

async function remover(_id) {

  await deletar(_id)

  setTarefa(
    taref.filter((tarefa) => tarefa._id !== _id)
  )
}




return (
    <div>
    <h1>Lista de Tarefas</h1>
    <div className={"formulario"}>
   <Tarefa 
   nomeTarefa={"Nome da Tarefa"}
   botao={adicionar}
   valor={valor}
   onChange={onChange}
   onSubmit={enviar}
   ></Tarefa>
   <select onChange= {(e) => setFiltro(e.target.value)}>
    <option value="todos">
    Todos
    </option>
    <option value="concluida">
     Tarefas Concluidas 
    </option>
    <option value="pendentes">
    Pendentes
    </option>
   </select>
  
  </div>
    
<div className='Tarefa'>
    {tarefasFiltradas.map((tarefa) => (

    <div key={tarefa._id} className='div'>
   <h2>{tarefa.title}</h2>
   <div className='div2'>
   <input type="checkbox" checked={tarefa.concluida || false}  onChange={async () => { await atualizar(tarefa), await Carregar()}}/>
   <button  onClick={() => remover(tarefa._id)}>Deletar</button>
   </div>
   
   
    </div>
  ))}
  </div>
   
    
    </div>
  )
}

export default App
