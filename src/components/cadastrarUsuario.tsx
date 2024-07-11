import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuario } from "../models/usuario";
import { imc } from "../models/imc";

function CadastrarUsuario() {
  const navigate = useNavigate();
  const [Nome, setNome] = useState("");
  const [Id, setId] = useState("");
  const [CPF, setCpf] = useState("");

  useEffect(() => {
    carregarUsuario();
  }, []);

  function carregarUsuario() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/usuario/listar")
      .then((resposta) => resposta.json())
      .then((usuario: usuario[]) => {
        setUsuario(usuario);
      });
  }

  function cadastrarUsuario(e: any) {
    const usuario: usuario = {
      Nome: Nome,
      CPF: CPF,
      Id: Id,
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5000/usuario/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((resposta) => resposta.json())
      .then((usuario: usuario) => {
        navigate("/pages/usuario/listar");
      });
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrar usuario</h1>
      <form onSubmit={cadastrarUsuario}>
        <label>nome:</label>
        <input
          type="text"
          placeholder="Digite o nome"
          onChange={(e: any) => setNome(e.target.value)}
          required
        />
        <br />
        <label>CPF:</label>
        <input
          type="text"
          placeholder="Digite o CPF"
          onChange={(e: any) => setCpf(e.target.value)}
        />
        <br />


        <br />
        <button type="submit">cadastrarUsuario</button>
      </form>
    </div>
  );
}

export default CadastrarUsuario;