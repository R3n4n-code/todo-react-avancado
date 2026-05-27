import { useState } from "react"

function useTudo() {
const [valor, setValor] = useState("")


function limpar() {
    setValor("")
}

function onChange(e) {
    setValor(e.target.value)
  }
  
return {
    valor, limpar, onChange
}

}


export default useTudo