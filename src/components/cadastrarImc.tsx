import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuario } from "../models/usuario";
import { imc } from "../models/imc";

function CadastrarUsuario() {
  const navigate = useNavigate();
  const [Peso, setPeso] = useState("");
  const [Id, setId] = useState("");
  const [Altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  useEffect(() => {
    carregarImc();
  }, []);

  function carregarImc() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/imc/listar")
      .then((resposta) => resposta.json())
      .then((imc: imc[]) => {
        setImc(imc);
      });
  }

  function cadastrarImc(e: any) {
    const imc: imc = {
      Peso: Peso,
      Altura: Altura,
      Id: Id,
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5000/imc/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imc),
    })
      .then((resposta) => resposta.json())
      .then((imc: imc) => {
        navigate("/pages/imc/listar");
      });
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrar usuario</h1>
      <form onSubmit={cadastrarImc}>
        <label>Peso:</label>
        <input
          type="text"
          placeholder="Digite o peso"
          onChange={(e: any) => setPeso(e.target.value)}
          required
        />
        <br />
        <label>Altura:</label>
        <input
          type="text"
          placeholder="Digite o CPF"
          onChange={(e: any) => setAltura(e.target.value)}
        />
        <br />


        <br />
        <button type="submit">cadastrarImc</button>
      </form>
    </div>
  );
}

export default CadastrarUsuario;