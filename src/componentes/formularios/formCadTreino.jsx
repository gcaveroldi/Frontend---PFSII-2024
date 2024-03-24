import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormCadTreino(props) {
    const [validado, setValidado] = useState(false);
    const [clienteTreino, setClienteTreino] = useState([{
        codigo: 0,
        nome: "Nenhum Treino encontrado"
    }]);
    const [treino, setTreino] = useState({
        codigo: "",
        categoria: ""
    });

    useEffect(() => {
        buscaTreino();
    }, []);

    function buscaTreino() {
        fetch("http://localhost:4000/treino", { method: "GET" })
            .then(resposta => resposta.json())
            .then(retorno => {
                if (retorno.status) {
                    setClienteTreino(retorno.listaTreino);
                }
            })
            .catch(erro => {
                setClienteTreino([{
                    codigo: 0,
                    nome: "Nenhum Treino encontrado: " + erro.message
                }]);
            });
    }

    useEffect(()=>{
        buscaTreino();
    }, [])

    function manipularMudanca(evento) {
        const { name, value } = evento.target;
        setTreino({ ...treino, [name]: value });
    }

    function manipularSubmissao(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        } else {
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
                    <Form.Select id="categoria" name="categoria">
                    {
                        clienteTreino.map((clienteTreino) => {
                            return (
                                <option key={clienteTreino.codigo} value={clienteTreino.codigo}>
                                    {clienteTreino.descricao}
                                </option>
                            );

                            })
                         
                        }
                        
                    </Form.Select>
                    
                </Form.Group>
            </Row>
            <Button type="submit">Gravar</Button>
            <Button onClick={() => {
                props.setExibirTabela(true);
            }}>Voltar</Button>
        </Form>
    );
}
