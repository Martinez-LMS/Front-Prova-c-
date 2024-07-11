import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListarAluno from "./components/listarImcPorAluno";
import CadastrarUsuario from "./components/cadastrarUsuario";
import ListarIMC from "./components/listarImc";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/pages/aluno/listar"}>
                  Listar alubo{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/cadastrar/usuario"}>
                  Cadastrar usuario{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/imc/listar"}>
                  Listar imc{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ListarAluno />} />
            <Route
              path="/pages/aluno/listar"
              element={<ListarAluno />}
            />
            <Route
              path="/pages/cadastrar/usuario"
              element={<CadastrarUsuario />}
            />
            <Route
              path="/pages/imc/listar"
              element={<ListarIMC />}
            />
          <footer>
            <p>Desenvolvido por leonardo</p>
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;