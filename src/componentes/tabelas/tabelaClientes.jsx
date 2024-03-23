import { Button, Table } from "react-bootstrap";
export default function TabelaClientes(props) {
    return (
        <div>
            <Button onClick={() => {
                //precisar alterar o estado 'exibirTabela' da tela de cadastro de cliente para false
                props.setExibirTabela(false);
            }}>
                Cadastrar Novo Cliente
            </Button>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Cidade</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaClientes?.map((cliente, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.sobrenome}</td>
                                    <td>{cliente.cidade + "/" + cliente.estado}</td>
                                    <td>{cliente.cep}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            
        </div>
    )
}