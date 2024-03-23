import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadProdutos(props){
    const [validado, setValidado] = useState(false);
    const [produto, setProduto] = useState({
        codigo: "",
        categoria:{}
    });

    function manipularMudanca(evento) {
        //extrair do evento onChange quem provocou a sua ocorrência
        const componente = evento.currentTarget;
        setProduto({ ...produto, [componente.name]: componente.value });
    }

    function manipularSubmissao(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        }
        else{
            setValidado(false);
            props.setExibirTabela(true);
            
        }
    }
    return (
        <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label>Código</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="0"
                        value={produto.codigo}
                        id="codigo"
                        name="codigo"
                        onChange={manipularMudanca}
                        disabled
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o código do produto.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="12">
                    <Form.Label>Categoria:</Form.Label>
                    
                    <Form.Control.Feedback type='invalid'>Por favor, informe a categoria do produto.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Gravar</Button>
            <Button onClick={() => {
                props.setExibirTabela(true);
            }}>Voltar</Button>
        </Form>
    );
}