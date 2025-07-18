import { useState } from 'react'

const FormularioCadastro = ({ aoSalvar }) => {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    dataNascimento: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormulario(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formulario.nome.trim() === '' || formulario.email.trim() === '') {
      alert('Nome e email são obrigatórios!')
      return
    }
    
    aoSalvar(formulario)
    setFormulario({
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      dataNascimento: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="grupo-formulario">
        <label>Nome completo:</label>
        <input
          type="text"
          name="nome"
          value={formulario.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grupo-formulario">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grupo-formulario">
        <label>Telefone:</label>
        <input
          type="tel"
          name="telefone"
          value={formulario.telefone}
          onChange={handleChange}
        />
      </div>

      <div className="grupo-formulario">
        <label>Endereço:</label>
        <input
          type="text"
          name="endereco"
          value={formulario.endereco}
          onChange={handleChange}
        />
      </div>

      <div className="grupo-formulario">
        <label>Data de Nascimento:</label>
        <input
          type="date"
          name="dataNascimento"
          value={formulario.dataNascimento}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="botao">Cadastrar</button>
    </form>
  )
}

export default FormularioCadastro
