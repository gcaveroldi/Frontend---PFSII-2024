import { Button, Table } from "react-bootstrap";
export default function TabelaProdutos(props) {
    return (
        <div>
            <Button onClick={() => {
                props.setExibirTabela(false);
            }}>
                Cadastrar Novo Treino
            </Button>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaProdutos?.map((produto, index) => {
                            return (
                                <tr key={produto.codigo}>
                                    <td>{produto.codigo}</td>
                                    <td>{produto.categoria.descricao}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            
        </div>
    )
}