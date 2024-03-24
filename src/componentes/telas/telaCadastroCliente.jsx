import FormCadClientes from "../formularios/formCadClientes";
import TabelaClientes from "../tabelas/tabelaClientes";
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function TelaCadastroCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaClientes, setListaClientes] = useState([]);

    if (exibirTabela) {
        return (
            <div>
                <Pagina>
                    <h1>Cadastro de Clientes</h1>
                    <br/>
                    <h2>Lista de Clientes</h2>
                    <TabelaClientes listaClientes={listaClientes} setExibirTabela={setExibirTabela} />
                </Pagina>
            </div>
        )
    }
    else {
        return (
            <div>
                <Pagina>
                    <h1>Tela de Cadastro de Clientes</h1>
                    <br/>
                    <h2>Formulário de Cadastro de Clientes</h2>
                    <FormCadClientes 
                        setExibirTabela={setExibirTabela}
                        listaClientes={listaClientes}
                        setListaClientes={setListaClientes}
                     />
                </Pagina>
            </div>
        )
    }
}