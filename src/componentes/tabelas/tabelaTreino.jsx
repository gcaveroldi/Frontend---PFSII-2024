import { Button, Table } from "react-bootstrap";
export default function TabelaTreino(props) {
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
                        props.listaTreino?.map((treino, index) => {
                            return (
                                <tr key={treino.codigo}>
                                    <td>{treino.codigo}</td>
                                    <td>{treino.categoria.descricao}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            
        </div>
    )
}