const ListaClientes = ({ clientes, aoRemover }) => {
  return (
    <div className="lista-clientes">
      <h2>Clientes Cadastrados</h2>
      {clientes.length === 0 ? (
        <p className="mensagem-vazia">Nenhum cliente cadastrado ainda.</p>
      ) : (
        <ul className="lista">
          {clientes.map((cliente, index) => (
            <li key={index} className="item-lista">
              <div className="info-cliente">
                <p><strong>Nome:</strong> {cliente.nome}</p>
                <p><strong>Email:</strong> {cliente.email}</p>
                {cliente.telefone && <p><strong>Telefone:</strong> {cliente.telefone}</p>}
                {cliente.endereco && <p><strong>Endereço:</strong> {cliente.endereco}</p>}
                {cliente.dataNascimento && <p><strong>Nascimento:</strong> {cliente.dataNascimento}</p>}
              </div>
              <button
                onClick={() => aoRemover(index)}
                className="botao-remover"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaClientes
