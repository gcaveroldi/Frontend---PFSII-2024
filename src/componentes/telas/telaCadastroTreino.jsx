import FormCadTreino from "../formularios/formCadTreino";
import TabelaTreino from "../tabelas/tabelaTreino";
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function TelaCadastroTreino(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaTreino, setListaTreino] = useState([]);

    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h1>Cadastro de Treinos</h1>
                    <br/>
                    <h2>Lista de Treinos</h2>
                    <TabelaTreino listaTreino={listaTreino} setExibirTabela={setExibirTabela} />
                </Pagina>
            </div>
        )
    }
    else {
        return (
            <div>
                <Pagina>
                    <h1>Cadastro de Treinos</h1>
                    <br/>
                    <h2>Formulário de Cadastro de Treinos</h2>
                    <FormCadTreino 
                        setExibirTabela={setExibirTabela}
                        listaTreino={listaTreino}
                        setListaTreino={setListaTreino}
                     />
                </Pagina>
            </div>
        )
    }
}