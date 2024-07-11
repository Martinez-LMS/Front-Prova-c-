import { useEffect, useState } from "react";
import { imc } from "../models/imc";
import axios from "axios";

function ListarIMC() {
  const [imc, setImc] = useState<imc[]>([]);

  useEffect(() => {
    carregarImc();
  }, []);

  function carregarImc() {
    fetch("http://localhost:5000/imc/listar")
      .then((resposta) => resposta.json())
      .then((imc: imc[]) => {
        console.table(imc);
        setImc(imc);
      });
  }

  function alterar(id: string) {
    console.log(`Id: ${id}`);
    axios
      .put(`http://localhost:5000/imc/alterar/${id}`)
      .then((resposta) => {
        setImc(resposta.data);
      });
  }

  return (
    <div>
      <h1>Listar Tarefas</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>aluno </th>
          </tr>
        </thead>
        <tbody>
          {imc.map((imc) => (
            <tr key={imc.Id}>
              <td>{imc.peso}</td>
              <td>{imc.aluno}</td>
              <td>{imc.altura}</td>
              <td>
                <button
                  onClick={() => {
                    alterar(imc.Id!);
                  }}
                >
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarIMC;

function carregarImc() {
    throw new Error("Function not implemented.");
}
