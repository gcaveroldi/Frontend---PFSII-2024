import { Container, Form, Button } from "react-bootstrap";
import { ContextoUsuario } from "../contexto/Contexto";
import { useContext, useState } from "react";

export default function TelaLogin() {
    const [usuario, setUsuario] = useContext(ContextoUsuario);
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [senha, setSenha] = useState("");

    function realizarLogin(){
        if (nomeUsuario === 'admin' && senha==='admin'){
            setUsuario({
                nome: nomeUsuario,
                logado: true
            });
        }
    }
    return (
        <Container className="d-flex align-items-center justify-content-center w-50">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control 
                        type="text"  
                        id="usuario" 
                        name="usuario"
                        value={nomeUsuario}
                        onChange={(e) => setNomeUsuario(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        id="senha" 
                        name="senha"  
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="button" onClick={realizarLogin}>
                    Login
                </Button>
            </Form>
        </Container>
    );

}