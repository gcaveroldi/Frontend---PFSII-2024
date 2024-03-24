import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadTreino(props){
    const [validado, setValidado] = useState(false);
    const [treino, setTreino] = useState({
        codigo: "",
        categoria:{}
    });

    function manipularMudanca(evento) {
        const componente = evento.currentTarget;
        setTreino({ ...treino, [componente.name]: componente.value });
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
                        value={treino.codigo}
                        id="codigo"
                        name="codigo"
                        onChange={manipularMudanca}
                        disabled
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o código do treino.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label>Categoria:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="0"
                        value={treino.codigo}
                        id="categoria"
                        name="categoria"
                        onChange={manipularMudanca}
                        disabled
                    />
                    
                    <Form.Control.Feedback type='invalid'>Por favor, informe a categoria do treino.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Gravar</Button>
            <Button onClick={() => {
                props.setExibirTabela(true);
            }}>Voltar</Button>
        </Form>
    );
}