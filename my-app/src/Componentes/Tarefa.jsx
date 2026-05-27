
function Tarefa ({nomeTarefa,valor,botao,onChange,onSubmit}) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                type="text"
                placeholder={nomeTarefa}
                value={valor}
                onChange={onChange}
                />
                <button onClick={botao}>Adicionar</button>
            </form>
        

        </div>
    )

}


export default Tarefa;