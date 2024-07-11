import { useEffect, useState } from "react";
import { imc } from "../models/imc";
import axios from "axios";
import { aluno } from "../models/aluno";

function ListarAluno() {
  const [aluno, setAluno] = useState<imc[]>([]);

  useEffect(() => {
    carregarAluno();
  }, []);

  function carregarAluno() {
    fetch("http://localhost:5000/imc/listar{aluno}")
      .then((resposta) => resposta.json())
      .then((aluno: aluno[]) => {
        console.table(aluno);
        setAluno(aluno);
      });
  }

  return (
    <div>
      <h1>Listar aluno</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Nome</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>CPF </th>
          </tr>
        </thead>
        <tbody>
          {aluno.map((aluno) => (
            <tr key={aluno.Id}>
              <td>{aluno.peso}</td>
              <td>{aluno.altura}</td>
              <td>{aluno.Nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarAluno;

function carregarImc() {
    throw new Error("Function not implemented.");
}
