import FormCadProdutos from "../formularios/formCadProdutos";
import TabelaProdutos from "../tabelas/tabelaProdutos";
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function TelaCadastroProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaProdutos, setListaProdutos] = useState([]);

    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h1>Cadastro de Treinos</h1>
                    <br/>
                    <h2>Lista de Treinos</h2>
                    <TabelaProdutos listaProdutos={listaProdutos} setExibirTabela={setExibirTabela} />
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
                    <h2>Formulário de cadastro de Treinos</h2>
                    <FormCadProdutos 
                        setExibirTabela={setExibirTabela}
                        listaProdutos={listaProdutos}
                        setListaProdutos={setListaProdutos}
                     />
                </Pagina>
            </div>
        )
    }
}