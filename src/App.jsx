import { useState } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaClientes from './components/ListaClientes'
import './App.css'

function App() {
  const [clientes, setClientes] = useState([])

  const adicionarCliente = (novoCliente) => {
    setClientes([...clientes, novoCliente])
  }

  const removerCliente = (id) => {
    setClientes(clientes.filter((_, index) => index !== id))
  }

  return (
    <div className="container">
      <h1 className="titulo">Cadastro de Clientes</h1>
      <FormularioCadastro aoSalvar={adicionarCliente} />
      <ListaClientes clientes={clientes} aoRemover={removerCliente} />
    </div>
  )
}

export default App
