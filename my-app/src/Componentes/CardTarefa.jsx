import { useContext } from "react"
import TarefaContext from "../context/TarefaContext"

function CardTarefa() {
    const {
        tarefasFiltradas,
        atualizar,
        Carregar,
        remover, } = useContext(TarefaContext)

    return (

        <div className='Tarefa'>
            {tarefasFiltradas.map((tarefa) => (

                <div key={tarefa._id} className='div'>
                    <p>{tarefa.title}</p>
                    <div className='div2'>
                        <input type="checkbox" checked={tarefa.concluida || false} onChange={async () => { await atualizar(tarefa), await Carregar() }} />
                        <button onClick={() => remover(tarefa._id)}>Deletar</button>
                    </div>


                </div>
            ))}
        </div>
    )
}

export default CardTarefa